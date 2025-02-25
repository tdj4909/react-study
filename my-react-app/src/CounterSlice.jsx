import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setData: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const fetchData = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        dispatch(setData(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

export const { setLoading, setData, setError} = counterSlice.actions;
export default counterSlice.reducer;