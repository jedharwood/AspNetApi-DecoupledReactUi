import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BurgerMenuSvg } from "../SVG/BurgerMenuSvg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as homeActions from "../../Actions/Home";
import * as authorizationSelectors from "../../Selectors/Authorization";
import * as authorizationActions from "../../Actions/Authorization";

const Header = ({ returnToHomeButtonClickedAction, isLoggedIn, signOutButtonClickedAction }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const renderAuthorizationLink = () => {
    return isLoggedIn ? (
      <NavLink exact to="/" className="d-block px-4 py-2 nav-link" onClick={signOutButtonClickedAction}>
        Sign out
      </NavLink>
    ) : (
      <NavLink exact to="/signin" className="d-block px-4 py-2 nav-link">
        Sign in
      </NavLink>
    );
  };

  const NavMenu = () => {
    if (showNavMenu) {
      return (
        <div className="nav-menu position-absolute mt-2 rounded py-1 bg-white" role="menu" aria-orientation="vertical" tabIndex="-1">
          <div className="py-1" role="none">
            <NavLink exact to="/" className="d-block px-4 py-2 nav-link" onClick={returnToHomeButtonClickedAction}>
              Read articles
            </NavLink>
            <NavLink exact to="/post" className="d-block px-4 py-2 nav-link">
              Post an article
            </NavLink>
            {renderAuthorizationLink()}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <header className="header-background">
      <div className="header-background-inner mx-auto px-4">
        <div className="position-relative d-flex justify-content-between nav-container">
          <div className="position-relative px-2 d-flex">
            <div className="flex-shrink-0 d-flex align-items-center">
              <NavLink exact to="/" className="logo-link d-flex align-items-center" onClick={returnToHomeButtonClickedAction}>
                <h1 className="font-weight-bold pl-2">The Guardian</h1>
              </NavLink>
            </div>
          </div>
          <div className="position-absolute burger-inset d-flex align-items-center pr-2 position-static ml-6 pr-0">
            <div className="ml-3 position-relative">
              <div className="position-relative d-flex align-items-center">
                <div className="rounded p-2 d-inline-flex align-items-center justify-content-center burger-menu" onClick={() => setShowNavMenu((showNavMenu) => !showNavMenu)}>
                  <BurgerMenuSvg />
                </div>
              </div>
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  returnToHomeButtonClickedAction: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  signOutButtonClickedAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isLoggedIn: authorizationSelectors.isLoggedIn(state),
});

const mapDispatchToProps = {
  returnToHomeButtonClickedAction: homeActions.returnToHomeButtonClickedAction,
  signOutButtonClickedAction: authorizationActions.signOutButtonClickedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
