import * as apiUtilities from "./ApiUtilities";

export function getJson(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  })
    .then(apiUtilities.handleResponse)
    .catch(apiUtilities.handleError);
}

export function postJson(url, request, token) {
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json", authorization: "bearer " + token },
    body: JSON.stringify(request),
  })
    .then(apiUtilities.handlePostResponse)
    .catch(apiUtilities.handleError);
}

export function postAuthJson(url, request) {
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(request),
  })
    .then(apiUtilities.handlePostAuthResponse)
    .catch(apiUtilities.handleError);
}
