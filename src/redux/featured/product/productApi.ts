import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productData) => ({
        url: "/product",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    getProduct: builder.query({
      query: (queryParams = {}) => {
        // Add default value
        const { searchTerm, sort, minPrice, maxPrice } = queryParams;

        const params = new URLSearchParams();

        if (searchTerm) params.append("searchTerm", searchTerm);
        if (minPrice) params.append("minPrice", minPrice);
        if (maxPrice) params.append("maxPrice", maxPrice);
        if (sort) params.append("sort", sort);
        return `/product?${params.toString()}`;
      },
      providesTags: ["Product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ productId, productUpdateData }) => ({
        url: `/product/${productId}`,
        method: "PUT",
        body: productUpdateData,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
