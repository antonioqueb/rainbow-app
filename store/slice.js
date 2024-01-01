import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice({
    name: "selectCategory",
    initialState: {
        value: "All",
    },
    reducers: {
        selectCategory: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { selectCategory } = Slice.actions;