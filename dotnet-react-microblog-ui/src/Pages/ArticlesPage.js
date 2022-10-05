import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as articlesSelectors from "../Selectors/Articles";
import DisplayArticles from "../Components/DisplayArticles";
import DisplayArticle from "../Components/DisplayArticle";
import Spinner from "../Components/Common/Spinner";

const renderPageContent = (displayArticle) => {
  return displayArticle ? <DisplayArticle /> : <DisplayArticles />;
};

const ArticlesPage = ({ displayArticle }) => {
  return (
    <Fragment>
      {renderPageContent(displayArticle)}
      <Spinner />
    </Fragment>
  );
};

ArticlesPage.propTypes = {
  displayArticle: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  displayArticle: articlesSelectors.isDisplayArticle(state),
});

export default connect(mapStateToProps)(ArticlesPage);
