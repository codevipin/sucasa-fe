import { RootState } from "../../store";
import { Presentation } from "../model/presentations.interface";

export const selectPresentation = (
  state: RootState,
  id: number
): Presentation =>
  state.presentations.presentations.filter((it) => it.id === id)[0];

export const selectPresentations = (state: RootState) =>
  state.presentations.presentations;
