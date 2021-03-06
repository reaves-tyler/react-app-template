import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppKV, appReducer } from './appStore';

export const store = createStore(combineReducers({ app: appReducer }), composeWithDevTools());

// Bring together state types for combineReducers
export type AppState = {
    app: AppKV;
};
