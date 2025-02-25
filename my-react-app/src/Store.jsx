import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import loggerMiddleware from "./LoggerMiddleware";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;