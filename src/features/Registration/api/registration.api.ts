import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "../../../config";

export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  endpoints: (build) => ({
    registration: build.mutation<
      void,
      { email: string; password: string; fullName: string; userName: string }
    >({
      query(data) {
        return {
          url: "signUp",
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useRegistrationMutation } = registrationApi;
