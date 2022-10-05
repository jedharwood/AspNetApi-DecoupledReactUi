import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./index.css";
import App from "./App";
import store from "./configureStore";
import { fetchArticleList } from "./Actions/Articles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "react-dom";

store.dispatch(fetchArticleList());

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
