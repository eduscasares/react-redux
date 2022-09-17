// import { createStoreHook } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../reducers/root-reducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools())

    return store;
}

export const createAsyncAppStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer, 
        compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
    )


    // Nos tenemos que asegurar de inicializar vía sagaMiddleware el Watcher
    sagaMiddleware.run(watcherSaga)

    return store;
}