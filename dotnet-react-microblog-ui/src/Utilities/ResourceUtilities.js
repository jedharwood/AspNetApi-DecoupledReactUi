const buildUrl = (key) => {
  const baseUrl = "https://localhost:5001/";
  return baseUrl + key;
};

export const getArticlesApiUrl = () => buildUrl("articles");
export const getArticleByIdApiUrl = (articleId) => buildUrl(`articles/${articleId}`);
export const getAuthorizationApiUrl = () => buildUrl("user/authenticate");
