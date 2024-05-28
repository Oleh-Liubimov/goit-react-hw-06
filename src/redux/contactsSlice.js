import { createSlice, nanoid } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json"

const contactsInitialState = {
  items: initialContacts
};


const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
            prepare(value) {
                return {
                    payload: {
                        id: nanoid(),
                        name:value.name,
                        number:value.number,
                    }
                }
            },
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload)
            state.items.splice(index, 1)
        }
    }
})


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;