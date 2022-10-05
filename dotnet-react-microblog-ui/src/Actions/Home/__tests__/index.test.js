import * as sut from "../index";
import * as actionTypes from "../../../Constants/ActionType";

describe("home action", () => {
  describe("returnToHomeButtonClickedAction", () => {
    test("should dispatch an RETURN_TO_HOME_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.returnToHomeButtonClickedAction();

      // Assert
      expect(result).toEqual({
        type: actionTypes.RETURN_TO_HOME_BUTTON_CLICKED,
      });
    });
  });
});
