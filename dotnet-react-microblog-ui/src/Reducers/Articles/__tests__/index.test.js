import deepFreeze from "deep-freeze";
import * as actionTypes from "../../../Constants/ActionType";
import sut from "../index";
import * as testData from "../../../CommonTestData/TestData";

describe("articles reducer", () => {
  test("should return initial state", () => {
    // Act
    const result = sut(undefined, {});

    // Assert
    expect(result).toEqual({});
  });

  test("when handling a FETCH_ARTICLES_REQUESTED action should set fetchingArticles to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_ARTICLES_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      fetchingArticles: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_ARTICLES_SUCCEEDED action should set fetchingArticles to false and return an array of articles", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_ARTICLES_SUCCEEDED,
      articles: testData.arrayOfArticles,
    };

    const state = {
      fetchingArticles: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingArticles: false,
      articles: testData.arrayOfArticles,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_ARTICLES_FAILED action should set fetchingArticles to false", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_ARTICLES_FAILED,
    };

    const state = {
      fetchingArticles: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingArticles: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_ARTICLE_BY_ID_REQUESTED action should set fetchingArticleById to true", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_ARTICLE_BY_ID_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      fetchingArticleById: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_ARTICLE_BY_ID_SUCCEEDED action should set fetchingArticleById to false and return an article", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_ARTICLE_BY_ID_SUCCEEDED,
      article: testData.anArticle,
    };

    const state = {
      fetchingArticleById: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingArticleById: false,
      article: testData.anArticle,
      displayArticle: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a FETCH_ARTICLE_BY_ID_FAILED action should set fetchingArticleById to false", () => {
    // Arrange
    const action = {
      type: actionTypes.FETCH_ARTICLE_BY_ID_FAILED,
    };

    const state = {
      fetchingArticleById: true,
    };

    deepFreeze(state);

    const expectedState = {
      fetchingArticleById: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a RETURN_TO_HOME_BUTTON_CLICKED action should set displayArticle: false & postingArticleSucceeded: false", () => {
    // Arrange
    const action = {
      type: actionTypes.RETURN_TO_HOME_BUTTON_CLICKED,
    };

    const state = {
      displayArticle: true,
      postingArticleSucceeded: true,
    };

    deepFreeze(state);

    const expectedState = {
      displayArticle: false,
      postingArticleSucceeded: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a ARTICLE_FIELDS_UPDATED action should update articleFields", () => {
    // Arrange
    const articleFields = testData.newArticleFields;
    const action = {
      type: actionTypes.ARTICLE_FIELDS_UPDATED,
      articleFields,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      articleFields: testData.newArticleFields,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a ARTICLE_FIELDS_UPDATED action with empty payload should update articleFields", () => {
    // Arrange
    const articleFields = testData.newArticleFields;
    const action = {
      type: actionTypes.ARTICLE_FIELDS_UPDATED,
      articleFields,
    };

    const state = {
      foo: "bar",
      articleFields: testData.newArticleFields,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      articleFields: testData.newArticleFields,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_ARTICLE_REQUESTED action should set postingArticle: true, postingArticleSucceeded: false & postingArticleFailed: false", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_ARTICLE_REQUESTED,
    };

    const state = {
      foo: "bar",
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingArticle: true,
      postingArticleSucceeded: false,
      postingArticleFailed: false,
      serverSideValidationErrors: null,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_ARTICLE_SUCCEEDED action should set postingArticle: false & postingArticleSucceeded: true", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_ARTICLE_SUCCEEDED,
    };

    const state = {
      foo: "bar",
      postingArticle: true,
      postingArticleSucceeded: false,
      postingArticleFailed: false,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingArticle: false,
      postingArticleSucceeded: true,
      postingArticleFailed: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a POST_ARTICLE_FAILED action should set postingArticle: false & postingArticleFailed: true", () => {
    // Arrange
    const action = {
      type: actionTypes.POST_ARTICLE_FAILED,
    };

    const state = {
      foo: "bar",
      postingArticle: true,
      postingArticleSucceeded: false,
      postingArticleFailed: false,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingArticle: false,
      postingArticleSucceeded: false,
      postingArticleFailed: true,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });

  test("when handling a CLOSE_ARTICLE_SUCCESS_BUTTON_CLICKED action should set postingArticleFailed: false", () => {
    // Arrange
    const action = {
      type: actionTypes.CLOSE_ARTICLE_SUCCESS_BUTTON_CLICKED,
    };

    const state = {
      foo: "bar",
      postingArticleFailed: true,
    };

    deepFreeze(state);

    const expectedState = {
      foo: "bar",
      postingArticleFailed: false,
    };

    // Act
    const result = sut(state, action);

    // Assert
    expect(result).toEqual(expectedState);
  });
});
