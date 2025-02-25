import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import counterReducer from "./CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;