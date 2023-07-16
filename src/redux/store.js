const { configureStore } = require('@reduxjs/toolkit');
const { auth } = require('./auth/slice');

export const store = configureStore({
  reducer: {
    auth: auth.reducer,
  },
});
