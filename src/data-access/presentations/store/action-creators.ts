import store from "../../store";
import { Presentation } from "../model/presentations.interface";
import {
  AddAttendeeToPresentationDispatchType,
  LoadAllPresentationDispatchType,
  LoadPresentationDispatchType,
} from "../model/store.interface";
import presentationService from "../service/presentations.service";
import {
  ADD_ATTENDEE_TO_PRESENTATION,
  ADD_PRESENTATION,
  LOAD_ALL_PRESENTATION,
  LOAD_PRESENTATION,
} from "./action-types";
import { selectPresentation } from "./selectors";

export const fetchAllPresentationsAction = () => {
  return async (dispatch: LoadAllPresentationDispatchType) => {
    const getPresentations = async () => {
      const dataInStore = store.getState().presentations.presentations;
      if (!!dataInStore?.length) return dataInStore;
      return await presentationService.fetchPresentations();
    };
    dispatch({
      type: LOAD_ALL_PRESENTATION,
      presentations: await getPresentations(),
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

export const addPresentationAction = (newPresentation: Presentation) => {
  return async (dispatch: LoadPresentationDispatchType) => {
    const presentation = await presentationService.addPresentation(
      newPresentation
    );
    dispatch({
      type: ADD_PRESENTATION,
      presentation,
    });
  };
};

export const addAttendeeToPresentationAction = (
  presentationId: number,
  attendeeId: number
) => {
  return async (dispatch: AddAttendeeToPresentationDispatchType) => {
    const presentation = await presentationService.addAttendee({
      presentationId,
      attendeeId,
    });
    dispatch({
      type: ADD_ATTENDEE_TO_PRESENTATION,
      presentation,
    });
  };
};
