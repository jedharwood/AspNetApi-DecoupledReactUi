import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SignInForm } from "../Components/SignInForm";
import * as authorizationActions from "../Actions/Authorization";
import * as authorizationSelectors from "../Selectors/Authorization";
import SignInSuccess from "../Components/SignInSuccess";
import Spinner from "../Components/Common/Spinner";
import { isNilOrEmpty } from "../Utilities/RamdaUtilities";

const disableSubmit = (signInFields) => {
  return isNilOrEmpty(signInFields.name) || isNilOrEmpty(signInFields.password) ? true : false;
};

const SignInPage = ({ signInFieldsUpdated, postAuthorization, postingAuthorizationSucceeded, postingAuthorizationFailed }) => {
  let [signInFields, setSignInFields] = useState({ name: "", password: "" });

  const handleInputChange = ({ target }) => {
    const updatedSignInFields = {
      ...signInFields,
      [target.name]: target.value,
    };
    setSignInFields(updatedSignInFields);
    signInFieldsUpdated(updatedSignInFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAuthorization();
  };

  const renderPageContent = () => {
    return postingAuthorizationSucceeded || postingAuthorizationFailed ? <SignInSuccess /> : <SignInForm onChange={handleInputChange} onSubmit={handleSubmit} signInFields={signInFields} disableSubmit={disableSubmit(signInFields)} />;
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

SignInPage.propTypes = {
  postAuthorization: PropTypes.func.isRequired,
  signInFieldsUpdated: PropTypes.func.isRequired,
  postingAuthorizationSucceeded: PropTypes.bool,
  postingAuthorizationFailed: PropTypes.bool,
};

const mapDispatchToProps = {
  postAuthorization: authorizationActions.postAuthorization,
  signInFieldsUpdated: authorizationActions.signInFieldsUpdated,
};

const mapStateToProps = (state) => ({
  postingAuthorizationSucceeded: authorizationSelectors.postingAuthorizationSucceeded(state),
  postingAuthorizationFailed: authorizationSelectors.postingAuthorizationFailed(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
