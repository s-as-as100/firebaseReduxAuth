import {createStore, applyMiddleware} from 'redux';
// to determine previous state and next state;
import logger from 'redux-logger';

// make api request to dispatch new redux action;
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';


const middleware = [thunk];

if(process.env.NODE_ENV === "development") {
    middleware.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))