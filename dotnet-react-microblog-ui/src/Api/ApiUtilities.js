export async function handleResponse(response) {
  if (response.ok) return response.json().then((data) => ({ ok: response.ok, jsonData: data }));
  if (response.status === 404) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Record could not be found.");
}

export async function handlePostResponse(response) {
  if (response.ok) {
    return response;
  }
  if (response.status === 400) {
    const error = await response.text();
    return error;
  }
  throw new Error("Bad request.");
}

export async function handlePostAuthResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data.token;
  });
}

export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
