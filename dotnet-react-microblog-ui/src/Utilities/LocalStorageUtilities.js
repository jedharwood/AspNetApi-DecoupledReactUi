export const storeToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
};
