import { RootState } from "../../store";
import { Attendee } from "../model/attendees.interface";

export const selectAttendee = (state: RootState, id: number): Attendee =>
  state.attendees.attendees.filter((it) => it.id === id)[0];

export const selectAttendees = (state: RootState) => state.attendees.attendees;
