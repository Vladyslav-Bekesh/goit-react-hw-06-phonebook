import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './slicers/contactSlicer';
import { handleFilterChange } from './slicers/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: handleFilterChange,
  },
});
