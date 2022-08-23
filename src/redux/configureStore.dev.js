import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnchancers =
    window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnchancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) //Optional: It will enforce store Immutability
  );
}
