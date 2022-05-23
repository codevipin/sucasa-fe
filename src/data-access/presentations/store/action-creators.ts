import store from "../../store";
import {
  LoadAllPresentationDispatchType,
  LoadPresentationDispatchType,
} from "../model/store.interface";
import presentationService from "../service/presentations.service";
import { LOAD_ALL_PRESENTATION, LOAD_PRESENTATION } from "./action-types";
import { selectPresentation } from "./selectors";

export const fetchAllPresentationsAction = () => {
  return async (dispatch: LoadAllPresentationDispatchType) => {
    const presentations = await presentationService.fetchPresentations();
    dispatch({
      type: LOAD_ALL_PRESENTATION,
      presentations,
    });
  };
};

export const fetchPresentationAction = (id: number) => {
  const getPresentation = async (presentationId: number) => {
    let presentation = selectPresentation(store.getState(), presentationId);
    if (!!presentation) return presentation;
    return await presentationService.fetchPresentation(presentationId);
  };
  return async (dispatch: LoadPresentationDispatchType) => {
    dispatch({
      type: LOAD_PRESENTATION,
      presentation: await getPresentation(id),
    });
  };
};
