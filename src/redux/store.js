import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const handleFilterChange = createAction('filter/Change');

const contacts = createReducer([], {
  [addContact.type]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact.type]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filter = createReducer('', {
  [handleFilterChange.type]: (state, action) => {
    return action.payload;
  },
});

export const store = configureStore({
  reducer: {
    contacts: contacts,
    filter: filter,
  },
});
