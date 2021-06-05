import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'

import rootReducer from './root-reducer';
import logger from 'redux-logger';

const middlelwares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlelwares));
export const persistor = persistStore(store)

export default {store, persistor}
