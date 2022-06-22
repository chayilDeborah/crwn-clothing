import { applyMiddleware, legacy_createStore} from "redux";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";
import { persistStore } from 'redux-persist';


const middlewares = [logger];
export const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default {store, persistor}; 