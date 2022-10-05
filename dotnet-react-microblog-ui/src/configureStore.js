import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AppReducers from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(AppReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
