import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";
import { IUsersApi } from "../../../mocks/data/users";

export const activeChatUserApi = createApi({
  reducerPath: "activeChatUser",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (build) => ({
    getActiveChatUser: build.query<IUsersApi, void>({
      query: () => ({
        url: `/activeChat`,
      }),
    }),
  }),
});

export const { useGetActiveChatUserQuery } = activeChatUserApi;
