import { createStoreHook } from 'react-redux';
// import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers/root-reducer';

export const createAppStore = () => {
    let store = createStoreHook(rootReducer, composeWithDevTools())

    return store;
}