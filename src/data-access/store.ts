import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
//import dev tools extension
import { composeWithDevTools } from "redux-devtools-extension";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
