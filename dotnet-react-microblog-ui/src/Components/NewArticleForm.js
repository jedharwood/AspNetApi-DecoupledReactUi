import React from "react";
import PropTypes from "prop-types";
import { TextField, TEXT_AREA } from "../Components/Common/TextField";
import Select from "react-select";
import { connect } from "react-redux";
import * as articlesSelectors from "../Selectors/Articles";
import { NavLink } from "react-router-dom";
import * as authorizationSelectors from "../Selectors/Authorization";

const NewArticleForm = ({ onSubmit, articleFields, onChange, disableSubmit, onSelectChange, validationErrors, isLoggedIn }) => {
  const mockSelectOptions = [{ value: 1, label: "Stewart Lee" }];
  const showValidationErrors = () => {
    return validationErrors.length < 1 ? null : (
      <ul>
        {validationErrors.map((v) => {
          return (
            <li className="error-message" key={v}>
              {v}
            </li>
          );
        })}
      </ul>
    );
  };

  return !isLoggedIn ? (
    <div className="text-center">
      <h2 className="my-2">You are not signed in</h2>
      <h5 className="my-2">
        <span>Click </span>
        <NavLink exact to="/signin" className="close-button">
          here
        </NavLink>
        <span> to sign in.</span>
      </h5>
    </div>
  ) : (
    <div>
      <div className="text-dark-gray text-center">
        <h2>Post a new article</h2>
        <p className="mt-2">Please complete all fields</p>
      </div>
      {showValidationErrors()}
      <form onSubmit={onSubmit}>
        <TextField name="title" value={articleFields.title} onChange={onChange} required={true} placeholder="Title" />
        <TextField name="subtitle" value={articleFields.subtitle} onChange={onChange} required={true} placeholder="Subtitle" />
        <div className="mb-3">
          <Select required={true} isSearchable={true} options={mockSelectOptions} onChange={(e) => onSelectChange(e.value)} placeholder="Author" name="authorId" />
        </div>
        <TextField name="content" value={articleFields.content} onChange={onChange} required={true} placeholder="Content" inputType={TEXT_AREA} />
        <button type="submit" disabled={disableSubmit} className="position-relative w-100 d-flex justify-content-center py-2 px-4 rounded border-none custom-button">
          Submit
        </button>
      </form>
    </div>
  );
};

NewArticleForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  articleFields: PropTypes.shape({
    authorId: PropTypes.number,
    content: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
  }),
  disableSubmit: PropTypes.bool,
  validationErrors: PropTypes.arrayOf(PropTypes.string),
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  validationErrors: articlesSelectors.getValidationErrors(state),
  isLoggedIn: authorizationSelectors.isLoggedIn(state),
});

export default connect(mapStateToProps)(NewArticleForm);
