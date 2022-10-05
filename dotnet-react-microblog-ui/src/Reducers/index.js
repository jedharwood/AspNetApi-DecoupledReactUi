import { combineReducers } from "redux";
import articles from "./Articles";
import authorization from "./Authorization";

export default combineReducers({
  articles,
  authorization,
});
