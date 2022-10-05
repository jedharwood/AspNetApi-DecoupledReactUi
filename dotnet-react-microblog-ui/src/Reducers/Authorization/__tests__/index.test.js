import deepFreeze from "deep-freeze";
import * as actionTypes from "../../../Constants/ActionType";
import sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("authorization reducer", () => {
  test("should return initial state", () => {
    // Act
    const result = sut(undefined, {});

    // Assert
    expect(result).toEqual({ token: null });
  });

  test("when handling a SIGN_IN_FIELDS_UPDATED action should update signInFields", () => {
    // Arrange
    const signInFields = testData.signInFields;
    const action = {
      type: actionTypes.SIGN_IN_FIELDS_UPDATED,
      signInFields,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      signInFields: testData.signInFields,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a SIGN_IN_FIELDS_UPDATED action with empty payload should update signInFields", () => {
    // Arrange
    const signInFields = testData.signInFields;
    const action = {
      type: actionTypes.SIGN_IN_FIELDS_UPDATED,
      signInFields,
    };

    const state = {
      foo: "bar",
      signInFields: testData.signInFields,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      signInFields: testData.signInFields,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_AUTHORIZATION_REQUESTED action should set postingAuthorization: true, postingAuthorizationSucceeded: false & postingAuthorizationFailed: false", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_AUTHORIZATION_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingAuthorization: true,
      postingAuthorizationSucceeded: false,
      postingAuthorizationFailed: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_AUTHORIZATION_SUCCEEDED action should set postingAuthorization: false & postingAuthorizationSucceeded: true", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_AUTHORIZATION_SUCCEEDED,
    };

    const state = {
      foo: "bar",
      postingAuthorization: true,
      postingAuthorizationSucceeded: false,
      postingAuthorizationFailed: false,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingAuthorization: false,
      postingAuthorizationSucceeded: true,
      postingAuthorizationFailed: false,
      token: null,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_AUTHORIZATION_FAILED action should set postingAuthorization: false & postingAuthorizationFailed: true", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_AUTHORIZATION_FAILED,
    };

    const state = {
      foo: "bar",
      postingAuthorization: true,
      postingAuthorizationSucceeded: false,
      postingAuthorizationFailed: false,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingAuthorization: false,
      postingAuthorizationSucceeded: false,
      postingAuthorizationFailed: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a CLOSE_AUTHORIZATION_FAILURE_BUTTON_CLICKED action should set postingAuthorizationFailed: false", () => {
    // Arrange
    const action = {
      type: actionTypes.CLOSE_AUTHORIZATION_FAILURE_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
      postingAuthorizationFailed: true,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingAuthorizationFailed: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a SIGN_OUT_BUTTON_CLICKED action should set token: null", () => {
    // Arrange
    const action = {
      type: actionTypes.SIGN_OUT_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
      token: "aToken",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      token: null,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});
