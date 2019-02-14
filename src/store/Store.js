import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './Reducer';

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk, reduxImmutableStateInvariant())
        )
    );
}