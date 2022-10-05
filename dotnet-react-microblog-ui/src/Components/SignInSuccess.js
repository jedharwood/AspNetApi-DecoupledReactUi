import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as authorizationSelectors from "../Selectors/Authorization";
import { CloseSvg } from "./SVG/CloseSvg";
import { NavLink } from "react-router-dom";
import * as authorizationActions from "../Actions/Authorization";

const SignInSuccess = ({ postingAuthorizationSucceeded, closeAuthorizationFailureButtonClickedAction }) => {
  const getPageContent = () => {
    return postingAuthorizationSucceeded ? (
      <div className="text-center">
        <h2 className="my-2">You are now signed in</h2>
        <h5 className="my-2">
          <span>Click </span>
          <NavLink exact to="/post" className="close-button">
            here
          </NavLink>
          <span> to post an article.</span>
        </h5>
      </div>
    ) : (
      <div className="text-center">
        <h2 className="my-2">Username or password were incorrect...</h2>
        <h5 className="my-2">
          <span>Click </span>
          <div className="close-button d-inline-flex" onClick={closeAuthorizationFailureButtonClickedAction}>
            here
          </div>
          <span> to try again.</span>
        </h5>
      </div>
    );
  };

  const getCloseButton = () => {
    return postingAuthorizationSucceeded ? (
      <NavLink exact to="/" className="d-flex align-items-center close-button">
        close
        <CloseSvg />
      </NavLink>
    ) : (
      <div className="d-flex align-items-center close-button" onClick={closeAuthorizationFailureButtonClickedAction}>
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

SignInSuccess.propTypes = {
  postingAuthorizationSucceeded: PropTypes.bool,
  closeAuthorizationFailureButtonClickedAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  postingAuthorizationSucceeded: authorizationSelectors.postingAuthorizationSucceeded(state),
});

const mapDispatchToProps = {
  closeAuthorizationFailureButtonClickedAction: authorizationActions.closeAuthorizationFailureButtonClickedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInSuccess);
