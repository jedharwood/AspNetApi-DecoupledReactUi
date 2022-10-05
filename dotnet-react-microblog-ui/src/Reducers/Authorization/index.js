import * as actionTypes from "../../Constants/ActionType";
import * as storageUtilities from "../../Utilities/LocalStorageUtilities";

const initialState = {
  token: storageUtilities.getToken(),
};

const nullifyToken = () => {
  storageUtilities.removeToken();
  return null;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_FIELDS_UPDATED:
      return {
        ...state,
        signInFields: action.signInFields,
      };
    case actionTypes.POST_AUTHORIZATION_REQUESTED:
      return {
        ...state,
        postingAuthorization: true,
        postingAuthorizationSucceeded: false,
        postingAuthorizationFailed: false,
      };
    case actionTypes.POST_AUTHORIZATION_SUCCEEDED:
      return {
        ...state,
        postingAuthorization: false,
        postingAuthorizationSucceeded: true,
        token: storageUtilities.getToken(),
      };
    case actionTypes.POST_AUTHORIZATION_FAILED:
      return {
        ...state,
        postingAuthorization: false,
        postingAuthorizationFailed: true,
      };
    case actionTypes.CLOSE_AUTHORIZATION_FAILURE_BUTTON_CLICKED:
      return {
        ...state,
        postingAuthorizationFailed: false,
      };
    case actionTypes.SIGN_OUT_BUTTON_CLICKED:
      return {
        ...state,
        token: nullifyToken(),
      };
    default:
      return state;
  }
};
