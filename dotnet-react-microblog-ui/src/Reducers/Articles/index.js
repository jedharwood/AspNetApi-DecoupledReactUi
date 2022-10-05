import * as actionTypes from "../../Constants/ActionType";

const mapServerSideErrors = (errorString) => {
  return errorString.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "").split(",");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_REQUESTED:
      return {
        ...state,
        fetchingArticles: true,
      };
    case actionTypes.FETCH_ARTICLES_SUCCEEDED:
      return {
        ...state,
        fetchingArticles: false,
        articles: action.articles,
      };
    case actionTypes.FETCH_ARTICLES_FAILED:
      return {
        ...state,
        fetchingArticles: false,
      };
    case actionTypes.FETCH_ARTICLE_BY_ID_REQUESTED:
      return {
        ...state,
        fetchingArticleById: true,
      };
    case actionTypes.FETCH_ARTICLE_BY_ID_SUCCEEDED:
      return {
        ...state,
        fetchingArticleById: false,
        article: action.article,
        displayArticle: true,
      };
    case actionTypes.FETCH_ARTICLE_BY_ID_FAILED:
      return {
        ...state,
        fetchingArticleById: false,
      };
    case actionTypes.RETURN_TO_HOME_BUTTON_CLICKED:
      return {
        ...state,
        displayArticle: false,
        postingArticleSucceeded: false,
      };
    case actionTypes.ARTICLE_FIELDS_UPDATED:
      return {
        ...state,
        articleFields: action.articleFields,
      };
    case actionTypes.POST_ARTICLE_REQUESTED:
      return {
        ...state,
        postingArticle: true,
        postingArticleSucceeded: false,
        postingArticleFailed: false,
        serverSideValidationErrors: null,
      };
    case actionTypes.POST_ARTICLE_SUCCEEDED:
      return {
        ...state,
        postingArticle: false,
        postingArticleSucceeded: true,
      };
    case actionTypes.POST_ARTICLE_FAILED:
      return {
        ...state,
        postingArticle: false,
        postingArticleFailed: true,
      };
    case actionTypes.CLOSE_ARTICLE_SUCCESS_BUTTON_CLICKED:
      return {
        ...state,
        postingArticleFailed: false,
      };
    case actionTypes.POST_ARTICLE_ERRORED:
      return {
        ...state,
        postingArticle: false,
        serverSideValidationErrors: mapServerSideErrors(action.serverSideValidationErrors),
      };
    default:
      return state;
  }
};
