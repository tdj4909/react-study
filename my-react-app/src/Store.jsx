import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    devTools: import.meta.env.MODE !== "production",
});

export default store;