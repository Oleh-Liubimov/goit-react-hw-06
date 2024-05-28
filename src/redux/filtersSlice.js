import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        name:""
    },
    reducers: {
        changeFilter(state, action) {
           const filteredContacts = state.name.filter((contact) =>
             contact.name.toLowerCase().includes(action.payload.toLowerCase())
           );
           return filteredContacts;  
        }
    }
})

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

