import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userSlice',

  initialState: {
    userName: '',
    isLoggedIn: false,
  },

  reducers: {
    login(state, action) {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.userName = '';
      state.isLoggedIn = false;
    },
  },
});
