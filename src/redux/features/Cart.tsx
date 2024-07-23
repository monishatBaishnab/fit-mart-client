import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCart = {
  productId: string;
  productPrice: number;
  quantity: number;
  userId: string;
};

const initialState: TCart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<TCart>) => {
      const existsProduct = state.find(
        (item) => item.productId === action.payload.productId
      );
      if (existsProduct?.productId) {
        state = state.map((item) => {
          if (item.productId === action.payload.productId) {
            item.quantity = action.payload.quantity;
          }
          return item;
        });
      } else {
        state.push(action.payload);
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state = state.filter((item) => item.productId !== action.payload);
      return state;
    },
  },
});

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
