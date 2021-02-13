import { combineReducers } from "redux";
import courses from "./courseReducer";
//  since ./courseReducer.js has default export, we can give any name when import

const rootReducer = combineReducers({
  courses: courses,
});

export default rootReducer;
