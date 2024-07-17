import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ftApi = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fit-mart-server-phi.vercel.app/" }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => ({
          url: "products",
          method: "GET",
        }),
      }),
    };
  },
});

// export const { useGetProductsQuery } = ftApi;

type UseGetProductsQueryType = typeof ftApi.endpoints.getProducts.useQuery;

const useTypedGetProductsQuery: UseGetProductsQueryType = ftApi.endpoints.getProducts.useQuery;

export { useTypedGetProductsQuery as useGetProductsQuery };