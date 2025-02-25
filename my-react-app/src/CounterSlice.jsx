import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setCounter: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const fetchCounter = () => async (dispatch) => {
    try {
        const response = await fetch("https://api.example.com/counter");
        const data = await response.json();
        dispatch(setCounter(data.value));
    } catch (error) {
        console.error("API 호출 실패: ", error);
    }
};

export const {increment, decrement, setCounter} = counterSlice.actions;
export default counterSlice.reducer;