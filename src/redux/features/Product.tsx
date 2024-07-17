import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TProduct = {
  _id?: string,
  specifications: Record<string, string>;
  manufacturerDetails: {
    contactInfo?: {
      phone?: string;
      email?: string;
      address?: string;
    };
    name?: string;
  };
  name: string;
  brand: string;
  price: string;
  stockQuantity: string;
  description: string;
  category: string;
  images: string;
  rating: string;
  features: string[];
  warranty: string;
  returnPolicy: string;
};

const initialState : TProduct[] = [{
  specifications: {
    dimensions: "",
    weight: "",
    material: "",
  },
  manufacturerDetails: {},
  name: "",
  brand: "",
  price: "",
  stockQuantity: "",
  description: "",
  category: "",
  images: "",
  rating: "",
  features: [],
  warranty: "",
  returnPolicy: "",
}];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      console.log(state, action);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
