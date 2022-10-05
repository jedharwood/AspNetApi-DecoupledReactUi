import "./css/App.scss";
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import ArticlesPage from "./Pages/ArticlesPage";
import PostArticlePage from "./Pages/PostArticlePage";
import SignInPage from "./Pages/SignInPage";
import Header from "./Components/Common/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/post" component={PostArticlePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/" exact component={ArticlesPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
