import { PRESENTATIONS_MOCK } from "../mocks/presentations.mock";
import {
  LoadAllPresentationAction,
  LoadPresentationAction,
  PresentationsState,
} from "../model/store.interface";

import { LOAD_ALL_PRESENTATION, LOAD_PRESENTATION } from "./action-types";

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
    default:
      return state;
  }
};

export default reducer;
