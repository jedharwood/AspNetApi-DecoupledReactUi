import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as articlesSelectors from "../Selectors/Articles";
import * as homeActions from "../Actions/Home";
import { CloseSvg } from "./SVG/CloseSvg";

const DisplayArticle = ({ article, returnToHomeButtonClickedAction }) => {
  const createdDate = new Date(article.created).toLocaleDateString();

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="w-75">
        <div className="d-flex justify-content-end pt-4 pb-1 px-5">
          <div className="d-flex align-items-center close-button" onClick={returnToHomeButtonClickedAction}>
            close
            <CloseSvg />
          </div>
        </div>
        <div className="text-dark-gray mb-4 pb-4 px-5">
          <div className="text-center">
            <h2 className="my-2">{article.title}</h2>
            <h5 className="my-2">{article.subtitle}</h5>
          </div>
          <div className="d-flex justify-content-between my-2">
            <h5 className="text-decoration-underline">{article.author.name}</h5>
            <p>{createdDate}</p>
          </div>
          <p className="text-left">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

DisplayArticle.propTypes = {
  article: PropTypes.shape({
    articleId: PropTypes.number,
    author: PropTypes.shape({
      authorId: PropTypes.number,
      name: PropTypes.string,
    }),
    authorId: PropTypes.number,
    content: PropTypes.string,
    created: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
  returnToHomeButtonClickedAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  article: articlesSelectors.getArticle(state),
});

const mapDispatchToProps = {
  returnToHomeButtonClickedAction: homeActions.returnToHomeButtonClickedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticle);
