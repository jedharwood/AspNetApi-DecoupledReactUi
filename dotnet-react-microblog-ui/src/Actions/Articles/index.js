import * as actionTypes from "../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import * as resourceUtilities from "../../Utilities/ResourceUtilities";
import * as articlesSelectors from "../../Selectors/Articles";
import * as authorizationSelectors from "../../Selectors/Authorization";

const dispatchFetchArticlesFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_ARTICLES_FAILED,
  });

const dispatchFetchArticleByIdFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.FETCH_ARTICLE_BY_ID_FAILED,
  });

export const fetchArticleList = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.FETCH_ARTICLES_REQUESTED,
    });

    const url = resourceUtilities.getArticlesApiUrl();

    const response = await fetch.getJson(url);
    if (response.ok) {
      dispatch({
        type: actionTypes.FETCH_ARTICLES_SUCCEEDED,
        articles: response.jsonData,
      });
      return;
    }

    dispatchFetchArticlesFailedAction(dispatch);
  } catch (exception) {
    dispatchFetchArticlesFailedAction(dispatch);
  }
};

export const fetchArticleById = (articleId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.FETCH_ARTICLE_BY_ID_REQUESTED,
    });

    const url = resourceUtilities.getArticleByIdApiUrl(articleId);

    const response = await fetch.getJson(url);

    if (response.ok) {
      dispatch({
        type: actionTypes.FETCH_ARTICLE_BY_ID_SUCCEEDED,
        article: response.jsonData,
      });
      return;
    }

    dispatchFetchArticleByIdFailedAction(dispatch);
  } catch (exception) {
    dispatchFetchArticleByIdFailedAction(dispatch);
  }
};

export const articleFieldsUpdated = (articleFields) => ({
  type: actionTypes.ARTICLE_FIELDS_UPDATED,
  articleFields,
});

export const postArticle = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.POST_ARTICLE_REQUESTED,
    });

    const url = resourceUtilities.getArticlesApiUrl();

    const state = getState();

    const updatedArticleFields = articlesSelectors.getUpdatedArticleFields(state);

    const request = {
      authorId: updatedArticleFields.authorId,
      content: updatedArticleFields.content,
      title: updatedArticleFields.title,
      subtitle: updatedArticleFields.subtitle,
    };

    const token = authorizationSelectors.getToken(state);
    console.log("action", token);
    const response = await fetch.postJson(url, request, token);
    if (response.ok) {
      dispatch({
        type: actionTypes.POST_ARTICLE_SUCCEEDED,
      });
      return;
    }

    dispatch({
      type: actionTypes.POST_ARTICLE_ERRORED,
      serverSideValidationErrors: response,
    });
  } catch (exception) {
    dispatch({
      type: actionTypes.POST_ARTICLE_FAILED,
    });
  }
};

export const closeArticleSuccessButtonClickedAction = () => ({
  type: actionTypes.CLOSE_ARTICLE_SUCCESS_BUTTON_CLICKED,
});
