import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";

export const activeUserApi = createApi({
  reducerPath: "activeUserApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (build) => ({
    activeUser: build.mutation<void, { activeUserId: any; authUserId: any }>({
      query(data) {
        return {
          url: "activeUser",
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useActiveUserMutation } = activeUserApi;
