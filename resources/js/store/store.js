import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk]

let devtools = f => f
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        devtools
    )   
);

export default  store;