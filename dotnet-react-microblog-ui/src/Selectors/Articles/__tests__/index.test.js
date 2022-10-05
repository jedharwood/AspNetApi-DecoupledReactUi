import * as sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("articles selectors", () => {
  describe("isFetchingArticles", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when fetchingArticles is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        articles: {
          fetchingArticles: value,
        },
      };

      // Act
      const result = sut.isFetchingArticles(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when fetchingArticles is true should return true", () => {
      // Arrange
      const state = {
        articles: {
          fetchingArticles: true,
        },
      };

      // Act
      const result = sut.isFetchingArticles(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("getArticles", () => {
    test("when articles is not set selector should default to an empty array", () => {
      // Arrange
      const state = {
        articles: {},
      };

      // Act
      const result = sut.getArticles(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when articles is an empty array selector should default to an empty array", () => {
      // Arrange
      const state = {
        articles: {
          articles: [],
        },
      };

      // Act
      const result = sut.getArticles(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when articles is set selector should return an array of articles", () => {
      // Arrange
      const state = {
        articles: {
          articles: testData.arrayOfArticles,
        },
      };

      // Act
      const result = sut.getArticles(state);

      // Assert
      expect(result).toEqual(testData.arrayOfArticles);
    });
  });

  describe("isFetchingArticleById", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when fetchingArticleById is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        articles: {
          fetchingArticleById: value,
        },
      };

      // Act
      const result = sut.isFetchingArticleById(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when fetchingArticleById is true should return true", () => {
      // Arrange
      const state = {
        articles: {
          fetchingArticleById: true,
        },
      };

      // Act
      const result = sut.isFetchingArticleById(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("getArticle", () => {
    test("when articles is not set selector should default to an empty array", () => {
      // Arrange
      const state = {
        articles: {},
      };

      // Act
      const result = sut.getArticle(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when article is an empty object selector should default to an empty object", () => {
      // Arrange
      const state = {
        articles: {
          article: {},
        },
      };

      // Act
      const result = sut.getArticle(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when articles is set selector should return an array of articles", () => {
      // Arrange
      const state = {
        articles: {
          article: testData.anArticle,
        },
      };

      // Act
      const result = sut.getArticle(state);

      // Assert
      expect(result).toEqual(testData.anArticle);
    });
  });

  describe("isDisplayArticle", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when displayArticle is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        articles: {
          displayArticle: value,
        },
      };

      // Act
      const result = sut.isDisplayArticle(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when displayArticle is true should return true", () => {
      // Arrange
      const state = {
        articles: {
          displayArticle: true,
        },
      };

      // Act
      const result = sut.isDisplayArticle(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("getUpdatedArticleFields", () => {
    test("when articleFields are not set selector should default to an empty object", () => {
      // Arrange
      const state = {
        articles: {},
      };

      // Act
      const result = sut.getUpdatedArticleFields(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when articleFields is an empty object selector should default to an empty object", () => {
      // Arrange
      const state = {
        articles: {
          articleFields: {},
        },
      };

      // Act
      const result = sut.getUpdatedArticleFields(state);

      // Assert
      expect(result).toEqual({});
    });

    test("when articleFields are set selector should return a populated object", () => {
      // Arrange
      const state = {
        articles: {
          articleFields: testData.newArticleFields,
        },
      };

      // Act
      const result = sut.getUpdatedArticleFields(state);

      // Assert
      expect(result).toEqual(testData.newArticleFields);
    });
  });

  describe("isPostingArticle", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when postingArticle is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        articles: {
          postingArticle: value,
        },
      };

      // Act
      const result = sut.isPostingArticle(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when postingArticle is true should return true", () => {
      // Arrange
      const state = {
        articles: {
          postingArticle: true,
        },
      };

      // Act
      const result = sut.isPostingArticle(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("postingArticleSucceeded", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when postingArticleSucceeded is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        articles: {
          postingArticleSucceeded: value,
        },
      };

      // Act
      const result = sut.postingArticleSucceeded(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when postingArticleSucceeded is true should return true", () => {
      // Arrange
      const state = {
        articles: {
          postingArticleSucceeded: true,
        },
      };

      // Act
      const result = sut.postingArticleSucceeded(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("postingArticleFailed", () => {
    test.each([[null], [undefined], [false], ["Not a boolean"]])("when postingArticleFailed is false or otherwise invalid should return false", (value) => {
      // Arrange
      const state = {
        articles: {
          postingArticleFailed: value,
        },
      };

      // Act
      const result = sut.postingArticleFailed(state);

      // Assert
      expect(result).toEqual(false);
    });

    test("when postingArticleFailed is true should return true", () => {
      // Arrange
      const state = {
        articles: {
          postingArticleFailed: true,
        },
      };

      // Act
      const result = sut.postingArticleFailed(state);

      // Assert
      expect(result).toEqual(true);
    });
  });

  describe("getValidationErrors", () => {
    test("when serverSideValidationErrors is not set selector should default to an empty array", () => {
      // Arrange
      const state = {
        articles: {},
      };

      // Act
      const result = sut.getValidationErrors(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when serverSideValidationErrors is an empty array selector should default to an empty array", () => {
      // Arrange
      const state = {
        articles: {
          serverSideValidationErrors: [],
        },
      };

      // Act
      const result = sut.getValidationErrors(state);

      // Assert
      expect(result).toEqual([]);
    });

    test("when serverSideValidationErrors is set selector should return an array of serverSideValidationErrors", () => {
      // Arrange
      const state = {
        articles: {
          serverSideValidationErrors: ["Error 1", "Error 2"],
        },
      };

      // Act
      const result = sut.getValidationErrors(state);

      // Assert
      expect(result).toEqual(["Error 1", "Error 2"]);
    });
  });
});
