import { createStore, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, reducer);

const logger = createLogger();

const enhancers = applyMiddleware(promiseMiddleware, logger);

const reduxStore = createStore(persistedReducer, enhancers);

const persiststore = persistStore(reduxStore);

export { reduxStore, persiststore };
