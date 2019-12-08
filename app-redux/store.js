import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import rootSaga from './sagas';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['test'],
    blacklist: []
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export function configStore() {
    const store = createStore(
      persistedReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    const persistor = persistStore(store);
    return { store, persistor };
}