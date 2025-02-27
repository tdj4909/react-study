import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

const store = configureStore({
    reducer: {
        counter: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(thunk),
});

export const persistor = persistStore(store);
export default store;