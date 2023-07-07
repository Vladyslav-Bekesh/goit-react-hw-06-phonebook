import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filerSlice = createSlice({
  name: 'contacts',
  initialState,
  redusers: {
    handleFilterChange(state, action) {
      return action.payload;
    },
  },
});

export const { handleFilterChange } = filerSlice.actions;
export default filerSlice.reducer;
