import { ReduxAction } from "../../../common/models/redux.interface";
import { Presentation } from "./presentations.interface";

export interface LoadAllPresentationAction extends ReduxAction {
  presentations: Presentation[];
}

export type LoadAllPresentationDispatchType = (
  args: LoadAllPresentationAction
) => LoadAllPresentationAction;

export interface PresentationsState {
  presentations: Presentation[];
}
