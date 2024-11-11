import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import todoReducer from "./todoReducer";

const store = createStore(todoReducer);
// const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
