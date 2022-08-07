import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "./features/Post/api/post.api";
import { loginApi } from "./features/Login/api/login.api";
import { loginSlice } from "./features/Login/slices/login.slice";
import { registrationApi } from "./features/Registration/api/registration.api";
import { usersApi } from "./features/User/api/users.api";
import { messageSlice } from "./features/Messages/slices/message.slice";
import { activeChatUserApi } from "./features/Messages/api/activeChatUser.api";

export const store = configureStore({
  reducer: {
    messageReducer: messageSlice.reducer,
    loginUser: loginSlice.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
    [activeChatUserApi.reducerPath]: activeChatUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      usersApi.middleware,
      loginApi.middleware,
      registrationApi.middleware,
      activeChatUserApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
