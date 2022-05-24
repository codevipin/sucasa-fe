import {
  AddAttendeeAction,
  AttendeesState,
  LoadAllAttendeesAction,
} from "../model/store.interface";
import { ADD_ATTENDEE, LOAD_ALL_ATTENDEES } from "./action-types";

const intialSate: AttendeesState = {
  attendees: [],
};
const reducer = (
  state: AttendeesState = intialSate,
  action: LoadAllAttendeesAction | AddAttendeeAction
): AttendeesState => {
  switch (action.type) {
    case LOAD_ALL_ATTENDEES:
      const { attendees } = action as LoadAllAttendeesAction;
      return {
        ...state,
        attendees,
      };
    case ADD_ATTENDEE:
      const { attendee } = action as AddAttendeeAction;
      return {
        ...state,
        attendees: [attendee, ...state.attendees],
      };
    default:
      return state;
  }
};

export default reducer;
