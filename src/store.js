/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

export default function configureStore(initialState={}) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
    );

    return createStore(
        rootReducer,
        enhancer
    );
}