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
          if (cart.productId === data.productId) {
            cart.quantity += data.quantity;
          }
          return cart;
        });
        // return state;
      } else if (actionType === "modify") {
        state = state.map((cart: TCart) => {
          if (cart.productId === data.productId) {
            cart.quantity = data.quantity;
          }
          return cart;
        });
        // return state;
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

// const existsProduct = state.find(
//   (item) => item.productId === action.payload.productId
// );
// if (existsProduct?.productId) {
//   state = state.map((item) => {
//     if (item.productId === action.payload.productId) {
//       item.quantity = action.payload.quantity;
//     }
//     return item;
//   });
// } else {
//   state.push(action.payload);
// }
