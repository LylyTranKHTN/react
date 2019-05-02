import { createStore, applyMiddleware } from "redux";
import appReducers from "./../reducers/index";
import thunk from 'redux-thunk';

export const store = createStore(appReducers, applyMiddleware(thunk));