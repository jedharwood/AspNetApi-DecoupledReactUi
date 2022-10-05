import React from "react";
import PropTypes from "prop-types";

export const TEXT_AREA = "TEXT_AREA";
export const PASSWORD = "password";

const renderInput = (props) => {
  const classes = "position-relative d-block w-100 px-3 py-2 border rounded mb-3 form-input";
  if (props.inputType === TEXT_AREA) {
    return <textarea name={props.name} value={props.value} onChange={props.onChange} required={props.required} placeholder={props.placeholder} className={classes} />;
  }
  return <input name={props.name} value={props.value} onChange={props.onChange} required={props.required} placeholder={props.placeholder} className={classes} type={props.type} />;
};

export const TextField = (props) => {
  return renderInput(props);
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};
