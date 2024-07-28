import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "./features/Product";

export const ftApi = createApi({
  reducerPath: "Product",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fit-mart-server-phi.vercel.app/",
    // baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["getProducts", "getProduct"],
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        providesTags: ["getProducts"],
        query: (query) => {
          const { minPrice, maxPrice, categories, sort, search } = query ?? {};
          const params = new URLSearchParams();
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
          if (search) {
            params.append("search", search);
          }

          return {
            url: `products`,
            method: "GET",
            params,
          };
        },
      }),
      getProduct: builder.query({
        providesTags: ["getProduct"],
        query: (id) => ({
          url: `products/${id}`,
          method: "GET",
        }),
      }),
      createProduct: builder.mutation({
        query: (product: TProduct) => {
          return {
            url: `products`,
            method: "POST",
            body: product,
          };
        },
        invalidatesTags: ["getProducts"],
      }),
      editProduct: builder.mutation({
        query: ({ id, product }: { id: string; product: TProduct }) => {
          return {
            url: `products/${id}`,
            method: "PUT",
            body: product,
          };
        },
        invalidatesTags: ["getProducts"],
      }),
      deleteProduct: builder.mutation({
        query: (id: string) => {
          return {
            url: `products/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["getProducts"],
      }),
      createPurchase: builder.mutation({
        query: (cartsData) => {
          return {
            url: `purchase`,
            method: "POST",
            body: cartsData,
          };
        },
        invalidatesTags: ["getProducts", "getProduct"],
      }),
    };
  },
});

type UseGetProductsQueryType = typeof ftApi.endpoints.getProducts.useQuery;
type UseGetProductQueryType = typeof ftApi.endpoints.getProduct.useQuery;
type UseCreateProductMutationType =
  typeof ftApi.endpoints.createProduct.useMutation;
type UseEditProductMutationType =
  typeof ftApi.endpoints.editProduct.useMutation;
type UseDeleteProductMutationType =
  typeof ftApi.endpoints.deleteProduct.useMutation;
type UseCreatePurchaseMutationType =
  typeof ftApi.endpoints.createPurchase.useMutation;

const useTypedGetProductsQuery: UseGetProductsQueryType =
  ftApi.endpoints.getProducts.useQuery;
const useTypedGetProductQuery: UseGetProductQueryType =
  ftApi.endpoints.getProduct.useQuery;
const useTypedCreateProductMutation: UseCreateProductMutationType =
  ftApi.endpoints.createProduct.useMutation;
const useTypedDeleteProductMutation: UseDeleteProductMutationType =
  ftApi.endpoints.deleteProduct.useMutation;
const useTypedEditProductMutation: UseEditProductMutationType =
  ftApi.endpoints.editProduct.useMutation;
const useTypedCreatePurchaseMutation: UseCreatePurchaseMutationType =
  ftApi.endpoints.createPurchase.useMutation;

export { useTypedGetProductsQuery as useGetProductsQuery };
export { useTypedGetProductQuery as useGetProductQuery };
export { useTypedCreateProductMutation as useCreateProductMutation };
export { useTypedEditProductMutation as useEditProductMutation };
export { useTypedDeleteProductMutation as useDeleteProductMutation };
export { useTypedCreatePurchaseMutation as useCreatePurchaseMutation };
