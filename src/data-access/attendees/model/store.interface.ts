import { ReduxAction } from "../../../common/models/redux.interface";
import { Attendee } from "./attendees.interface";

export interface LoadAllAttendeesAction extends ReduxAction {
  attendees: Attendee[];
}

export type LoadAllAttendeeDispatchType = (
  args: LoadAllAttendeesAction
) => LoadAllAttendeesAction;

export interface AddAttendeeAction extends ReduxAction {
  attendee: Attendee;
}

export interface AttendeesState {
  attendees: Attendee[];
}

export type AddAttendeeDispatchType = (
  args: AddAttendeeAction
) => AddAttendeeAction;
