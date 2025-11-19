import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  // Add your state properties here
}

const initialState: AppState = {
  // Initialize your state here
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Add your reducers here
  },
});

export const {} = appSlice.actions;
export default appSlice.reducer;

