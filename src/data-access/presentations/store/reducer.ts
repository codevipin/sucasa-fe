import {
  LoadAllPresentationAction,
  LoadPresentationAction,
  PresentationsState,
} from "../model/store.interface";

import {
  ADD_ATTENDEE_TO_PRESENTATION,
  ADD_PRESENTATION,
  LOAD_ALL_PRESENTATION,
  LOAD_PRESENTATION,
} from "./action-types";

const intialSate: PresentationsState = {
  presentations: [],
};
const reducer = (
  state: PresentationsState = intialSate,
  action: LoadAllPresentationAction | LoadPresentationAction
): PresentationsState => {
  switch (action.type) {
    case LOAD_ALL_PRESENTATION:
      const { presentations } = action as LoadAllPresentationAction;
      return {
        ...state,
        presentations,
      };
    case LOAD_PRESENTATION:
      const { presentation } = action as LoadPresentationAction;
      return {
        ...state,
        presentations: [...state.presentations, presentation],
      };
    case ADD_PRESENTATION:
      const newPresentation = (action as LoadPresentationAction).presentation;
      return {
        ...state,
        presentations: [newPresentation, ...state.presentations],
      };
    case ADD_ATTENDEE_TO_PRESENTATION:
      const updatedPresentation = (action as LoadPresentationAction)
        .presentation;
      const toUpdateIndex = state.presentations.findIndex(
        (it) => it.id === updatedPresentation.id
      );
      const updatedPresentations = [...state.presentations];
      updatedPresentations[toUpdateIndex] = updatedPresentation;

      return {
        ...state,
        presentations: [...updatedPresentations],
      };
    default:
      return state;
  }
};

export default reducer;
