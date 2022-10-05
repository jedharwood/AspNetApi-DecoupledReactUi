import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as articlesSelectors from "../Selectors/Articles";
import * as homeActions from "../Actions/Home";
import { CloseSvg } from "./SVG/CloseSvg";
import * as articlesActions from "../Actions/Articles";
import { NavLink } from "react-router-dom";

const NewArticleSuccess = ({ returnToHomeButtonClickedAction, postingArticleSucceeded, closeArticleSuccessButtonClickedAction }) => {
  const getPageContent = () => {
    return postingArticleSucceeded ? (
      <div className="text-center">
        <h2 className="my-2">Your article has been posted</h2>
        <h5 className="my-2">Click close to return home.</h5>
      </div>
    ) : (
      <div className="text-center">
        <h2 className="my-2">Something went wrong...</h2>
        <h5 className="my-2">Click close to return to form.</h5>
      </div>
    );
  };

  const getCloseButton = () => {
    return postingArticleSucceeded ? (
      <NavLink exact to="/" className="d-flex align-items-center close-button" onClick={returnToHomeButtonClickedAction}>
        close
        <CloseSvg />
      </NavLink>
    ) : (
      <div className="d-flex align-items-center close-button" onClick={closeArticleSuccessButtonClickedAction}>
        close
        <CloseSvg />
      </div>
    );
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-end">{getCloseButton()}</div>
      <div className="text-dark-gray mb-4 pb-4 px-5">{getPageContent()}</div>
    </Fragment>
  );
};

NewArticleSuccess.propTypes = {
  returnToHomeButtonClickedAction: PropTypes.func,
  postingArticleSucceeded: PropTypes.bool,
  closeArticleSuccessButtonClickedAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  postingArticleSucceeded: articlesSelectors.postingArticleSucceeded(state),
});

const mapDispatchToProps = {
  returnToHomeButtonClickedAction: homeActions.returnToHomeButtonClickedAction,
  closeArticleSuccessButtonClickedAction: articlesActions.closeArticleSuccessButtonClickedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArticleSuccess);
