import { ReduxAction } from "../../../common/models/redux.interface";
import { Presentation } from "./presentations.interface";

export interface LoadAllPresentationAction extends ReduxAction {
  presentations: Presentation[];
}

export interface LoadPresentationAction extends ReduxAction {
  presentation: Presentation;
}

export interface AddAttendeeToPresentationAction extends ReduxAction {
  presentationId: number;
  attendeeId: number;
}

export type LoadAllPresentationDispatchType = (
  args: LoadAllPresentationAction
) => LoadAllPresentationAction;

export interface PresentationsState {
  presentations: Presentation[];
}

export type LoadPresentationDispatchType = (
  args: LoadPresentationAction
) => LoadPresentationAction;

export type AddAttendeeToPresentationDispatchType = (
  args: LoadPresentationAction
) => LoadPresentationAction;
