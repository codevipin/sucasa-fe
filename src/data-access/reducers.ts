import { combineReducers } from "redux";
import presentationReducer from "./presentations/store/reducer";

const reducers = combineReducers({
  presentations: presentationReducer,
});

export default reducers;
