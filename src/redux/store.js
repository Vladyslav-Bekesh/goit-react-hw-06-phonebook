import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './slicers/contactSlicer';
import filterReducer from './slicers/filterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReduser = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReduser,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
