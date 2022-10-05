import { prop, propEq, compose, defaultTo } from "ramda";

const getArticlesState = prop("articles");

export const isFetchingArticles = compose(propEq("fetchingArticles", true), getArticlesState);

export const getArticles = compose(defaultTo([]), prop("articles"), getArticlesState);

export const isFetchingArticleById = compose(propEq("fetchingArticleById", true), getArticlesState);

export const getArticle = compose(defaultTo({}), prop("article"), getArticlesState);

export const isDisplayArticle = compose(propEq("displayArticle", true), getArticlesState);

export const getUpdatedArticleFields = compose(defaultTo({}), prop("articleFields"), getArticlesState);

export const isPostingArticle = compose(propEq("postingArticle", true), getArticlesState);

export const postingArticleSucceeded = compose(propEq("postingArticleSucceeded", true), getArticlesState);

export const postingArticleFailed = compose(propEq("postingArticleFailed", true), getArticlesState);

export const getValidationErrors = compose(defaultTo([]), prop("serverSideValidationErrors"), getArticlesState);
