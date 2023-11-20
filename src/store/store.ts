import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localForage from 'localforage';

import { api } from "../services/api";

import authReducer from "./auth";

const reducers = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

const reduxStorage = {
  setItem: (key: string, value: unknown) => {
    localForage.setItem(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    return localForage.getItem(key);
  },
  removeItem: (key: string) => {
    return localForage.removeItem(key);
  },
};

const persistConfig = {
  key: "root",
  storage: reduxStorage,
  whitelist: ["theme", "auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
