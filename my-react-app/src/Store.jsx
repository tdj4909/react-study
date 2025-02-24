import {configureStore, createSlice} from "reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducer: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const {increment, decrement} = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export default store;