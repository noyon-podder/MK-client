import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductQuery } = baseApi;