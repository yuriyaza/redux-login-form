const { configureStore } = require('@reduxjs/toolkit');
const { userSlice } = require('./userSlice');

export const store = configureStore({
  reducer: {
    userState: userSlice.reducer,
  },
});
