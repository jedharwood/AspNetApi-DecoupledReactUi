import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import NewArticleForm from "../Components/NewArticleForm";
import * as articlesActions from "../Actions/Articles";
import Spinner from "../Components/Common/Spinner";
import NewArticleSuccess from "../Components/NewArticleSuccess";
import * as articlesSelectors from "../Selectors/Articles";
import { isNilOrEmpty } from "../Utilities/RamdaUtilities";

const disableSubmit = (articleFields) => {
  return isNilOrEmpty(articleFields.title) || isNilOrEmpty(articleFields.subtitle) || isNilOrEmpty(articleFields.content) || isNilOrEmpty(articleFields.authorId) ? true : false;
};

const PostArticlePage = ({ articleFieldsUpdated, postArticle, postingArticleSucceeded, postingArticleFailed }) => {
  let [articleFields, setArticleFields] = useState({ title: "", subtitle: "", content: "", authorId: null });

  const handleInputChange = ({ target }) => {
    const updatedArticleFields = {
      ...articleFields,
      [target.name]: target.value,
    };
    setArticleFields(updatedArticleFields);
    articleFieldsUpdated(updatedArticleFields);
  };

  const handleSelectInputChange = (value) => {
    const updatedAuthorId = {
      ...articleFields,
      authorId: value,
    };
    setArticleFields(updatedAuthorId);
    articleFieldsUpdated(updatedAuthorId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postArticle();
  };

  const renderPageContent = () => {
    return postingArticleSucceeded || postingArticleFailed ? <NewArticleSuccess /> : <NewArticleForm onChange={handleInputChange} onSubmit={handleSubmit} onSelectChange={handleSelectInputChange} articleFields={articleFields} disableSubmit={disableSubmit(articleFields)} />;
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-4 px-5">
      <div className="w-75">
        {renderPageContent()}
        <Spinner />
      </div>
    </div>
  );
};

PostArticlePage.propTypes = {
  postArticle: PropTypes.func.isRequired,
  articleFieldsUpdated: PropTypes.func.isRequired,
  postingArticleSucceeded: PropTypes.bool,
  postingArticleFailed: PropTypes.bool,
};

const mapDispatchToProps = {
  postArticle: articlesActions.postArticle,
  articleFieldsUpdated: articlesActions.articleFieldsUpdated,
};

const mapStateToProps = (state) => ({
  postingArticleSucceeded: articlesSelectors.postingArticleSucceeded(state),
  postingArticleFailed: articlesSelectors.postingArticleFailed(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostArticlePage);
