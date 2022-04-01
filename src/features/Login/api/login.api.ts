import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (build) => ({
    login: build.mutation<void, { email: string; password: string }>({
      query(data) {
        return {
          url: "login",
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
