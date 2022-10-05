import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";
import * as authorizationSelectors from "../../../Selectors/Authorization";
import * as testData from "../../../CommonTestData/TestData";

describe("authorization action", () => {
  describe("signInFieldsUpdated", () => {
    test("should dispatch SIGN_IN_FIELDS_UPDATED action", () => {
      // Act
      const result = sut.signInFieldsUpdated(testData.signInFields);

      // Assert
      expect(result).toEqual({
        type: actionTypes.SIGN_IN_FIELDS_UPDATED,
        signInFields: testData.signInFields,
      });
    });
  });

  describe("postAuthorization", () => {
    const authorizationApiUrl = "authorizationApiUrl";
    test("when result is not ok should dispatch a POST_AUTHORIZATION_FAILED action", async () => {
      // Arrange
      authorizationSelectors.getUpdatedSignInFields = jest.fn().mockReturnValue(testData.signInFields);
      resourceUtilities.getAuthorizationApiUrl = jest.fn().mockReturnValue(authorizationApiUrl);

      const response = {
        ok: false,
      };

      fetch.postAuthJson = jest.fn(() => new Promise((resolve) => resolve(response)));

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postAuthorization()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_AUTHORIZATION_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_AUTHORIZATION_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a POST_AUTHORIZATION_FAILED action", async () => {
      // Arrange
      authorizationSelectors.getUpdatedSignInFields = jest.fn().mockReturnValue(testData.signInFields);
      resourceUtilities.getAuthorizationApiUrl = jest.fn().mockReturnValue(authorizationApiUrl);

      fetch.postAuthJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postAuthorization()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_AUTHORIZATION_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_AUTHORIZATION_FAILED,
        },
      ]);
    });
  });

  describe("closeAuthorizationFailureButtonClickedAction", () => {
    test("should dispatch an CLOSE_AUTHORIZATION_FAILURE_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.closeAuthorizationFailureButtonClickedAction();

      // Assert
      expect(result).toEqual({
        type: actionTypes.CLOSE_AUTHORIZATION_FAILURE_BUTTON_CLICKED,
      });
    });
  });

  describe("signOut", () => {
    test("should dispatch an SIGN_OUT_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.signOutButtonClickedAction();

      // Assert
      expect(result).toEqual({
        type: actionTypes.SIGN_OUT_BUTTON_CLICKED,
      });
    });
  });
});
