import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("counter/fetchData", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
});

const counterSlice = createSlice({
    name: "counter",
    initialState: {value: 0, data: null, status: "idle"},
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;