import { configureStore } from "@reduxjs/toolkit";
import product from "./productSlice";
import cart from "./cartSlice";

export default configureStore({
  reducer: {
    product,
    cart,
  },
});
