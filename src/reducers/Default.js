import { createSlice } from '@reduxjs/toolkit';

const defaultSlice = createSlice({
  name: 'Default',
  initialState: {
    isLoading: false,
    isError: false,
    Default: {
      open: false,
      text: ''
    }
  },
  reducers: {
    getDefault(state, action) {
      state.isLoading = true;
    },
    getDefaultSuccess(state, action) {
      state.Default = action.payload
      state.isLoading = false;
    },
    getDefaultFail(state, action) {
      state.isLoading = false;
      state.isError = false;
    }
  },
});

export const {
  getDefault,
  getDefaultSuccess,
  getDefaultFail
} = defaultSlice.actions;
export default defaultSlice.reducer;
