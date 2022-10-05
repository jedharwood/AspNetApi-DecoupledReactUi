import React from "react";
import PropTypes from "prop-types";
import { TextField, PASSWORD } from "../Components/Common/TextField";

export const SignInForm = ({ onSubmit, signInFields, onChange, disableSubmit }) => {
  return (
    <div>
      <div className="text-dark-gray text-center mb-3">
        <h2>Sign in</h2>
      </div>
      <form onSubmit={onSubmit}>
        <TextField name="name" value={signInFields.name} onChange={onChange} required={true} placeholder="Username" />
        <TextField name="password" value={signInFields.password} onChange={onChange} required={true} placeholder="Password" type={PASSWORD} />
        <button type="submit" disabled={disableSubmit} className="position-relative w-100 d-flex justify-content-center py-2 px-4 rounded border-none custom-button">
          Sign in
        </button>
      </form>
    </div>
  );
};

SignInForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  signInFields: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
  }),
  disableSubmit: PropTypes.bool,
};
