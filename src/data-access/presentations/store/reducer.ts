import {
  LoadAllPresentationAction,
  PresentationsState,
} from "../model/store.interface";

import { LOAD_ALL_PRESENTATION } from "./action-types";

const intialSate: PresentationsState = {
  presentations: [],
};
const reducer = (
  state: PresentationsState = intialSate,
  action: LoadAllPresentationAction
): PresentationsState => {
  switch (action.type) {
    case LOAD_ALL_PRESENTATION:
      const { presentations } = action as LoadAllPresentationAction;
      return {
        ...state,
        presentations,
      };

    default:
      return state;
  }
};

export default reducer;
