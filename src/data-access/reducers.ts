import { combineReducers } from "redux";
import presentationReducer from "./presentations/store/reducer";
import attendeeReducer from "./attendees/store/reducer";

const reducers = combineReducers({
  presentations: presentationReducer,
  attendees: attendeeReducer,
});

export default reducers;
