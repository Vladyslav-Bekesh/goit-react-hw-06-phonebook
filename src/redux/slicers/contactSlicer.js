import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
