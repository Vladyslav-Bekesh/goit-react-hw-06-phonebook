import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

const filerSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleFilterChange(state, action) {
      return action.payload;
    },
  },
});

export const { handleFilterChange } = filerSlice.actions;
export const filterReducer = filerSlice.reducer;
