import * as sut from "../index";
import * as fetch from "../../../Api/Fetch";
import * as resourceUtilities from "../../../Utilities/ResourceUtilities";
import * as actionTypes from "../../../Constants/ActionType";
import * as testData from "../../../CommonTestData/TestData";
import * as articlesSelectors from "../../../Selectors/Articles";

describe("articles action", () => {
  const articlesApiUrl = "articlesApiUrl";

  describe("fetchArticleList", () => {
    test("when result is not ok should dispatch a FETCH_ARTICLES_FAILED action", async () => {
      // Arrange
      resourceUtilities.getArticlesApiUrl = jest.fn().mockReturnValue(articlesApiUrl);

      const response = {
        ok: false,
      };

      fetch.getJson = jest.fn(() => new Promise((resolve) => resolve(response)));

      const dispatch = jest.fn();

      // Act
      await sut.fetchArticleList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLES_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a FETCH_ARTICLES_FAILED action", async () => {
      // Arrange
      resourceUtilities.getPrefecturesApiUrl = jest.fn().mockReturnValue(articlesApiUrl);

      fetch.getJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchArticleList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLES_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a FETCH_PREFECTURES_SUCCEEDED action and an array of prefectures", async () => {
      // Arrange
      resourceUtilities.getPrefecturesApiUrl = jest.fn().mockReturnValue(articlesApiUrl);

      const response = {
        ok: true,
        jsonData: testData.arrayOfArticles,
      };

      fetch.getJson = jest.fn(() => new Promise((resolve) => resolve(response)));

      const dispatch = jest.fn();

      // Act
      await sut.fetchArticleList()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLES_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLES_SUCCEEDED,
          articles: testData.arrayOfArticles,
        },
      ]);
    });
  });

  describe("fetchArticleById", () => {
    const articleByIdApiUrl = "articleByIdApiUrl";
    const articleId = 1;

    test("when result is not ok should dispatch a FETCH_ARTICLE_BY_ID_FAILED action", async () => {
      // Arrange
      resourceUtilities.getArticleByIdApiUrl = jest.fn().mockReturnValue(articleByIdApiUrl);

      const response = {
        ok: false,
      };

      fetch.getJson = jest.fn(() => new Promise((resolve) => resolve(response)));

      const dispatch = jest.fn();

      // Act
      await sut.fetchArticleById(articleId)(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLE_BY_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLE_BY_ID_FAILED,
        },
      ]);
    });

    test("when fetch throws an error should dispatch a FETCH_ARTICLE_BY_ID_FAILED action", async () => {
      // Arrange
      resourceUtilities.getArticleByIdApiUrl = jest.fn().mockReturnValue(articleByIdApiUrl);

      fetch.getJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();

      // Act
      await sut.fetchArticleById()(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLE_BY_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLE_BY_ID_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a FETCH_PREFECTURES_SUCCEEDED action and an array of prefectures", async () => {
      // Arrange
      resourceUtilities.getArticleByIdApiUrl = jest.fn().mockReturnValue(articleByIdApiUrl);

      const response = {
        ok: true,
        jsonData: testData.anArticle,
      };

      fetch.getJson = jest.fn(() => new Promise((resolve) => resolve(response)));

      const dispatch = jest.fn();

      // Act
      await sut.fetchArticleById(articleId)(dispatch);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLE_BY_ID_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.FETCH_ARTICLE_BY_ID_SUCCEEDED,
          article: testData.anArticle,
        },
      ]);
    });
  });

  describe("articleFieldsUpdated", () => {
    test("should dispatch ARTICLE_FIELDS_UPDATED action", () => {
      // Arrange
      const articleFields = testData.newArticleFields;

      // Act
      const result = sut.articleFieldsUpdated(articleFields);

      // Assert
      expect(result).toEqual({
        type: actionTypes.ARTICLE_FIELDS_UPDATED,
        articleFields,
      });
    });
  });

  describe("postArticle", () => {
    test("when result is not ok should dispatch a POST_ARTICLE_ERRORED action", async () => {
      // Arrange
      articlesSelectors.getUpdatedArticleFields = jest.fn().mockReturnValue(testData.newArticleFields);
      resourceUtilities.getArticlesApiUrl = jest.fn().mockReturnValue(articlesApiUrl);

      const response = {
        ok: false,
      };

      fetch.postJson = jest.fn(() => new Promise((resolve) => resolve(response)));

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postArticle()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_ARTICLE_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_ARTICLE_ERRORED,
          serverSideValidationErrors: {
            ok: false,
          },
        },
      ]);
    });

    test("when fetch throws an error should dispatch a POST_ARTICLE_FAILED action", async () => {
      // Arrange
      articlesSelectors.getUpdatedArticleFields = jest.fn().mockReturnValue(testData.newArticleFields);
      resourceUtilities.getArticlesApiUrl = jest.fn().mockReturnValue(articlesApiUrl);

      fetch.postJson = jest.fn(
        () =>
          new Promise(() => {
            throw new Error("bang");
          })
      );

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postArticle()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_ARTICLE_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_ARTICLE_FAILED,
        },
      ]);
    });

    test("when result is ok should dispatch a POST_ARTICLE_SUCCEEDED action", async () => {
      // Arrange
      articlesSelectors.getUpdatedArticleFields = jest.fn().mockReturnValue(testData.newArticleFields);
      resourceUtilities.getArticlesApiUrl = jest.fn().mockReturnValue(articlesApiUrl);

      const response = {
        ok: true,
      };

      fetch.postJson = jest.fn(() => new Promise((resolve) => resolve(response)));

      const dispatch = jest.fn();
      const getState = jest.fn();

      // Act
      await sut.postArticle()(dispatch, getState);

      // Assert
      expect(dispatch.mock.calls.length).toEqual(2);

      expect(dispatch.mock.calls[0]).toEqual([
        {
          type: actionTypes.POST_ARTICLE_REQUESTED,
        },
      ]);

      expect(dispatch.mock.calls[1]).toEqual([
        {
          type: actionTypes.POST_ARTICLE_SUCCEEDED,
        },
      ]);
    });
  });

  describe("closeArticleSuccessButtonClickedAction", () => {
    test("should dispatch an CLOSE_ARTICLE_SUCCESS_BUTTON_CLICKED action", async () => {
      // Act
      const result = sut.closeArticleSuccessButtonClickedAction();

      // Assert
      expect(result).toEqual({
        type: actionTypes.CLOSE_ARTICLE_SUCCESS_BUTTON_CLICKED,
      });
    });
  });
});
