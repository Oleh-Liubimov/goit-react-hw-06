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
        },
        setFilteredContacts(state, action) {
            state.filteredContacts = action.payload
        },
        // changeFilter(state, action) {
        //    const filteredContacts = state.name.filter((contact) =>
        //      contact.name.toLowerCase().includes(action.payload.toLowerCase())
        //    );
        //    return filteredContacts;  
        // }
    }
})

export const { setFilterName, setFilteredContacts, } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

