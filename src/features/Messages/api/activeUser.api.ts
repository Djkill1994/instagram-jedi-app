import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";

export const activeUserApi = createApi({
  reducerPath: "activeUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (build) => ({
    activeUser: build.mutation<
      void,
      {
        id: string;
      }
    >({
      query(id) {
        return {
          url: "activeUser",
          method: "post",
          body: id,
        };
      },
    }),
  }),
});

export const { useActiveUserMutation } = activeUserApi;
