import { LoadAllPresentationDispatchType } from "../model/store.interface";
import presentationService from "../service/presentations.service";
import { LOAD_ALL_PRESENTATION } from "./action-types";

export const fetchPlanetsAction = () => {
  return async (dispatch: LoadAllPresentationDispatchType) => {
    const presentations = await presentationService.fetchPresentations();
    dispatch({
      type: LOAD_ALL_PRESENTATION,
      presentations,
    });
  };
};
