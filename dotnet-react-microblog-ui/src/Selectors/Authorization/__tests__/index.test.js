import * as sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("authorization selectors", () => {
  describe("getUpdatedSignInFields", () => {
    test("when signInFields are not set selector should default to an empty object", () => {
      // Arrange
      const state = {
        authorization: {},
      };

      // Act
      const result = sut.getUpdatedSignInFields(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when signInFields is an empty object selector should default to an empty object", () => {
      // Arrange
      const state = {
        authorization: {
          signInFields: {},
        },
      };

      // Act
      const result = sut.getUpdatedSignInFields(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when signInFields are set selector should return a populated object", () => {
      // Arrange
      const state = {
        authorization: {
          signInFields: testData.signInFields,
        },
      };

      // Act
      const result = sut.getUpdatedSignInFields(state);

      // Assert
      expect(result).toEqual(testData.signInFields);
    });
  });

  describe("isPostingAuthorization", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when postingAuthorization is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        authorization: {
          postingAuthorization: value,
        },
      };

      // Act
      const result = sut.isPostingAuthorization(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when postingAuthorization is true should return true", () => {
      // Arrange
      const state = {
        authorization: {
          postingAuthorization: true,
        },
      };

      // Act
      const result = sut.isPostingAuthorization(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("postingAuthorizationSucceeded", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when postingAuthorizationSucceeded is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        authorization: {
          postingAuthorizationSucceeded: value,
        },
      };

      // Act
      const result = sut.postingAuthorizationSucceeded(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when postingAuthorizationSucceeded is true should return true", () => {
      // Arrange
      const state = {
        authorization: {
          postingAuthorizationSucceeded: true,
        },
      };

      // Act
      const result = sut.postingAuthorizationSucceeded(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("postingAuthorizationFailed", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when postingAuthorizationFailed is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        authorization: {
          postingAuthorizationFailed: value,
        },
      };

      // Act
      const result = sut.postingAuthorizationFailed(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when postingAuthorizationFailed is true should return true", () => {
      // Arrange
      const state = {
        authorization: {
          postingAuthorizationFailed: true,
        },
      };

      // Act
      const result = sut.postingAuthorizationFailed(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("getToken", () => {
    test("when token is not set selector should default to null", () => {
      // Arrange
      const state = {
        authorization: {},
      };

      // Act
      const result = sut.getToken(state);

      // Assert
      expect(result).toEqual(null);
    });

    test("when token is null selector should default to null", () => {
      // Arrange
      const state = {
        authorization: {
          token: null,
        },
      };

      // Act
      const result = sut.getToken(state);

      // Assert
      expect(result).toEqual(null);
    });

    test("when token is set selector should return token", () => {
      // Arrange
      const state = {
        authorization: {
          token: "aToken",
        },
      };

      // Act
      const result = sut.getToken(state);

      // Assert
      expect(result).toEqual("aToken");
    });
  });

  describe("isLoggedIn", () => {
    test("when token is undefined, should return false", () => {
      // Arrange
      const state = {
        authorization: {},
      };

      // Act
      const result = sut.isLoggedIn(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when token is null, should return false", () => {
      // Arrange
      const state = {
        authorization: {
          token: null,
        },
      };

      // Act
      const result = sut.isLoggedIn(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when token is defined, should return true", () => {
      // Arrange
      const state = {
        authorization: {
          token: "aToken",
        },
      };

      // Act
      const result = sut.isLoggedIn(state);

      // Assert
      expect(result).toEqual(true);
    });
  });
});
