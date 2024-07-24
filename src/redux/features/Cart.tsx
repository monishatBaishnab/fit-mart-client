import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCart = {
  // userId: string;
  product: string;
  price: number;
  quantity: number;
};

const initialState: TCart[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (
      state,
      action: PayloadAction<{
        cartData: TCart;
        actionType: "increase" | "modify" | "create";
      }>
    ) => {
      const data = action.payload.cartData;
      const actionType = action.payload.actionType;

      if (actionType === "create") {
        state.push(data);
      } else if (actionType === "increase") {
        state = state.map((cart: TCart) => {
          if (cart.product === data.product) {
            cart.quantity += data.quantity;
          }
          return cart;
        });
      } else if (actionType === "modify") {
        state = state.map((cart: TCart) => {
          if (cart.product === data.product) {
            cart.quantity = data.quantity;
          }
          return cart;
        });
      } else if (actionType === "clear") {
        state = [];
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state = state.filter((item) => item.product !== action.payload);
      return state;
    },
    deleteAllProductFromCart: (state) => {
      state = [];
      return state;
    },
  },
});

export const { addProductToCart, deleteProductFromCart, deleteAllProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;
