import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "config";
import { IUsersApi } from "mocks/data/users";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (build) => ({
    getUsers: build.query<IUsersApi, void>({
      query: () => ({
        url: `/users`,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
