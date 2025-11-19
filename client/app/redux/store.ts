import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import jobPostApi from "./features/jobPost/jobPostSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [jobPostApi.reducerPath]: jobPostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobPostApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
