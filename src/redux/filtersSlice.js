import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
        filteredContacts:[]
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload
        }

    }
})

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

