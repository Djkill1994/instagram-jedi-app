import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";
import { IUsersApi } from "../../../mocks/data/users";

export const activeUserApi = createApi({
  reducerPath: "activeUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  tagTypes: ["ActiveUser"],
  endpoints: (build) => ({
    getActiveChatUser: build.query<IUsersApi, void>({
      query: () => "/activeChat",
      providesTags: ["ActiveUser"],
    }),
    addActiveUser: build.mutation<
      void,
      { activeUserId: any; userName: string; userAvatar: string }
    >({
      query(data) {
        return {
          url: "activeUser",
          method: "post",
          body: data,
        };
      },
      invalidatesTags: ["ActiveUser"],
    }),
  }),
});

export const { useAddActiveUserMutation, useGetActiveChatUserQuery } =
  activeUserApi;
