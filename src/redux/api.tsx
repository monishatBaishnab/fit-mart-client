import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ftApi = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://fit-mart-server-phi.vercel.app/",
    baseUrl: 'http://localhost:5000/'
  }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: (query) => {
          const { minPrice, maxPrice, categories, sort } = query ?? {};
          const params = new URLSearchParams();
          console.log(categories);
          if (minPrice && maxPrice) {
            params.append("minPrice", minPrice);
            params.append("maxPrice", maxPrice);
          }
          if (categories) {
            params.append("categories", categories);
          }
          if (sort) {
            params.append("sort", sort);
          }

          return {
            url: `products`,
            method: "GET",
            params
          };
        },
      }),
      getProduct: builder.query({
        query: (id) => ({
          url: `products/${id}`,
          method: "GET",
        }),
      }),
    };
  },
});

// export const { useGetProductsQuery } = ftApi;

type UseGetProductsQueryType = typeof ftApi.endpoints.getProducts.useQuery;
type UseGetProductQueryType = typeof ftApi.endpoints.getProduct.useQuery;

const useTypedGetProductsQuery: UseGetProductsQueryType =
  ftApi.endpoints.getProducts.useQuery;
const useTypedGetProductQuery: UseGetProductQueryType =
  ftApi.endpoints.getProduct.useQuery;

export { useTypedGetProductsQuery as useGetProductsQuery };
export { useTypedGetProductQuery as useGetProductQuery };
