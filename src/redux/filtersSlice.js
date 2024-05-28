import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name: "",
        filteredContacts:[]
    },
    reducers: {
        setFilterName(state, action) {
            state.name = action.payload
        }

    }
})

export const { setFilterName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

