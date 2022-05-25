import store from "../../store";
import { Attendee } from "../model/attendees.interface";
import {
  AddAttendeeDispatchType,
  LoadAllAttendeeDispatchType,
} from "../model/store.interface";
import attendeesService from "../service/attendees.service";
import { ADD_ATTENDEE, LOAD_ALL_ATTENDEES } from "./action-types";

export const fetchAllAttendeesAction = () => {
  return async (dispatch: LoadAllAttendeeDispatchType) => {
    const getAttendees = async () => {
      const dataInStore = store.getState().attendees.attendees;
      if (!!dataInStore?.length) return dataInStore;
      return await attendeesService.fetchAttendees();
    };
    dispatch({
      type: LOAD_ALL_ATTENDEES,
      attendees: await getAttendees(),
    });
  };
};

export const addAttendeesAction = (newAttendee: Attendee) => {
  return async (dispatch: AddAttendeeDispatchType) => {
    const attendee = await attendeesService.addAttendee(newAttendee);
    dispatch({
      type: ADD_ATTENDEE,
      attendee,
    });
  };
};
