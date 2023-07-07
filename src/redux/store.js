import { configureStore, getType } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
};

const persistContactReducer = persistReducer(persistConfig, contacts);

export const store = configureStore({
  reducer: {
    contacts: persistContactReducer,
    filter: filter,
  },
});

export const persistor = persistStore(store);
console.log(getType(persistor));
console.log(typeof persistor);
