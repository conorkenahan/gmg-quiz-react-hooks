import { combineReducers } from 'redux';
import questions from "./questions";
import score from "./score";

const rootReducer = combineReducers({
  questions,
  score
});

export default rootReducer;