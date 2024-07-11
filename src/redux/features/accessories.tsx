import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAccessories = {
  name: string;
};

const initialState = {
  name: "name",
};

const accessoriesSlice = createSlice({
  name: "accessories",
  initialState,
  reducers: {
    addAccessories: (state, action: PayloadAction<TAccessories>) => {
        console.log(state, action);
    },
  },
});

export const { addAccessories } = accessoriesSlice.actions;

export default accessoriesSlice.reducer;
