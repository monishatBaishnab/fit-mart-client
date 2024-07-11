import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ftApi = createApi({
  reducerPath: "Accessories",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => {
    return {
      getAccessories: builder.query({
        query: () => ({
          url: "todos",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useGetAccessoriesQuery } = ftApi;
