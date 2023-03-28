import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotalAmount: 0,
  loadingOrder: false,
  orderDone: [],
};

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
        state.cart[indexItem].size = action.payload.size;
      } else {
        const tempProduct = { ...action.payload, cartCount: 1 };
        state.cart.push(tempProduct);
      }
    },
    decreaseCart: (state, action) => {
      const indexItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[indexItem].cartCount > 1) {
        state.cart[indexItem].cartCount -= 1;
      } else if (state.cart[indexItem].cartCount === 1) {
        const removeCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeCart;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    getTotalAmount: (state) => {
      const { total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartCount } = cartItem;
          const itemTotal = price * cartCount;

          cartTotal.total += itemTotal;

          return cartTotal;
        },
        {
          total: 0,
        }
      );
      state.cartTotalAmount = total;
    },

    PlaceOrder: (state, action) => {
      if (state.cart.length >= 1) {
        state.loadingOrder = true;
        state.orderDone.push(action.payload);
        state.cart = [];
      }
    },
  },
});

export default cartSlice.reducer;

export const {
  getItem,
  decreaseCart,
  removeFromCart,
  getTotalAmount,
  PlaceOrder,
} = cartSlice.actions;
