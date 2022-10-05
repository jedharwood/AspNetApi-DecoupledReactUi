import { prop, propEq, compose, defaultTo } from "ramda";
import { isNotNil } from "../../Utilities/RamdaUtilities";

const getAuthorizationState = prop("authorization");

export const getUpdatedSignInFields = compose(defaultTo({}), prop("signInFields"), getAuthorizationState);

export const isPostingAuthorization = compose(propEq("postingAuthorization", true), getAuthorizationState);

export const postingAuthorizationSucceeded = compose(propEq("postingAuthorizationSucceeded", true), getAuthorizationState);

export const postingAuthorizationFailed = compose(propEq("postingAuthorizationFailed", true), getAuthorizationState);

export const getToken = compose(defaultTo(null), prop("token"), getAuthorizationState);

export const isLoggedIn = compose(isNotNil, getToken);
