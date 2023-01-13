import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { cart: [], cartTotal: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItem: (state, action) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexItem >= 0) {
        state.cart[indexItem].cartCount += 1;
        state.cart.push(...action.payload.size);
        // console.log(action.payload.size);
        // state.cart.size = action.payload.size;
      } else {
        const tempProduct = { ...action.payload, cartCount: 1 };
        state.cart.push(tempProduct);
      }
    },
    decreaseCart: (state, action) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      // console.log(state.cart[indexItem].cartCount);
      // console.log(action.payload);
      if (state.cart[indexItem].cartCount > 1) {
        state.cart[indexItem].cartCount -= 1;
        console.log(state.cart[indexItem].cartCount);
      } else if (state.cart[indexItem].cartCount === 1) {
        const removeCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeCart;
      }
    },
  },
});

export default cartSlice.reducer;

export const { getItem, decreaseCart } = cartSlice.actions;
