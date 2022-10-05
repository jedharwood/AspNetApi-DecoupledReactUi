import * as actionTypes from "../../Constants/ActionType";
import * as fetch from "../../Api/Fetch";
import * as resourceUtilities from "../../Utilities/ResourceUtilities";
import * as authorizationSelectors from "../../Selectors/Authorization";
import * as storageUtilities from "../../Utilities/LocalStorageUtilities";

const dispatchPostAuthorizationFailedAction = (dispatch) =>
  dispatch({
    type: actionTypes.POST_AUTHORIZATION_FAILED,
  });

export const signInFieldsUpdated = (signInFields) => ({
  type: actionTypes.SIGN_IN_FIELDS_UPDATED,
  signInFields,
});

export const postAuthorization = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.POST_AUTHORIZATION_REQUESTED,
    });

    const url = resourceUtilities.getAuthorizationApiUrl();

    const state = getState();

    const updatedSignInFields = authorizationSelectors.getUpdatedSignInFields(state);

    const request = {
      name: updatedSignInFields.name,
      password: updatedSignInFields.password,
    };

    const token = await fetch.postAuthJson(url, request);
    if (token.length) {
      storageUtilities.storeToken(token);

      dispatch({
        type: actionTypes.POST_AUTHORIZATION_SUCCEEDED,
      });
      return;
    }

    dispatchPostAuthorizationFailedAction(dispatch);
  } catch (exception) {
    dispatchPostAuthorizationFailedAction(dispatch);
  }
};

export const closeAuthorizationFailureButtonClickedAction = () => ({
  type: actionTypes.CLOSE_AUTHORIZATION_FAILURE_BUTTON_CLICKED,
});

export const signOutButtonClickedAction = () => ({
  type: actionTypes.SIGN_OUT_BUTTON_CLICKED,
});
