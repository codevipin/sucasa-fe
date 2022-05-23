import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import type { RootState, AppDispatch } from "./store";
import * as actionCreators from "../data-access/actions";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActionCreators = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
