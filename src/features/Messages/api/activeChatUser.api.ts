import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";
import { IActiveChatUsersApi } from "../../../mocks/data/selectedUsersChat";

export const activeChatUserApi = createApi({
  reducerPath: "activeChatUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  tagTypes: ["ActiveUser"],
  endpoints: (build) => ({
    getActiveChatUser: build.query<IActiveChatUsersApi, void>({
      query: () => "/activeChat",
      providesTags: ["ActiveUser"],
    }),
    addActiveUser: build.mutation<void, { id: string }>({
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
  activeChatUserApi;
