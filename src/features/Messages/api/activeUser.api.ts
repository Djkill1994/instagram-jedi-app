import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";
import { IUsersApi } from "../../../mocks/data/users";

export const activeUserApi = createApi({
  reducerPath: "activeUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  tagTypes: ["ActiveUser", "ActiveChat"],
  endpoints: (build) => ({
    activeUser: build.mutation<void, { activeUserId: any; authUserId: any }>({
      query(data) {
        return {
          url: "activeUser",
          method: "post",
          body: data,
          providesTags: ["ActiveUser"],
        };
      },
    }),
    getActiveChatUser: build.query<IUsersApi, void>({
      query: () => ({
        url: `/activeChat`,
        providesTags: ["ActiveUser"],
      }),
    }),
  }),
});

export const { useActiveUserMutation } = activeUserApi;
