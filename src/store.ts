import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./features/Post/api/post.api";
import { loginApi } from "./features/Login/api/login.api";
import { loginSlice } from "./features/Login/slices/login.slice";
import { registrationApi } from "./features/Registration/api/registration.api";

export const store = configureStore({
  reducer: {
    loginUser: loginSlice.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      loginApi.middleware,
      registrationApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
