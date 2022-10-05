import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as articlesSelectors from "../../Selectors/Articles";
import * as authorizationSelectors from "../../Selectors/Authorization";

const TheSpinningBit = () => (
  <div className="spinner">
    {[...Array(12)].map((_, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={idx}>
        <div />
      </div>
    ))}
  </div>
);

const spinnerText = (fetchingArticles, postingArticle, postingAuthorization) => {
  if (postingArticle) return "Posting article";
  if (postingAuthorization) return "Signing in";
  return fetchingArticles ? "Fetching articles" : "Fetching article";
};

const Spinner = ({ fetchingArticles, fetchingArticleById, postingArticle, postingAuthorization }) => {
  if (!fetchingArticles && !fetchingArticleById && !postingArticle && !postingAuthorization) {
    return null;
  }

  return (
    <div className="position-relative zindex-modal-backdrop" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="position-fixed opacity-75 spinner-modal-backdrop"></div>
      <div className="position-fixed zindex-modal spinner-modal">
        <div className="d-flex align-items-center justify-content-center min-vh-100 p-4 text-center">
          <div className="position-relative bg-white rounded px-4 py-5 overflow-hidden shadow-lg my-8 px-6 py-5">
            <div className="w-100 text-dark-gray">
              <div>
                <h3 className="text-center text-xl">{spinnerText(fetchingArticles, postingArticle, postingAuthorization)}</h3>
              </div>
              <TheSpinningBit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  fetchingArticles: PropTypes.bool,
  fetchingArticleById: PropTypes.bool,
  postingArticle: PropTypes.bool,
  postingAuthorization: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  fetchingArticles: articlesSelectors.isFetchingArticles(state),
  fetchingArticleById: articlesSelectors.isFetchingArticleById(state),
  postingArticle: articlesSelectors.isPostingArticle(state),
  postingAuthorization: authorizationSelectors.isPostingAuthorization(state),
});

export default connect(mapStateToProps)(Spinner);
