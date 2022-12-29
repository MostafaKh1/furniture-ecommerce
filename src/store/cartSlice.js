import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItem: (state, action) => {
      // const cheackItems = state.cart.some((ele) => ele.id === action.payload.id)
      state.cart = [...state.cart, action.payload];
      // state.cart = state.cart.filter((ele) => ele === action.payload);
    },
  },
});

export default cartSlice.reducer;

export const { getItem } = cartSlice.actions;
