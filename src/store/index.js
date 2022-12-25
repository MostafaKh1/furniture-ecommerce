import { configureStore } from "@reduxjs/toolkit";
import product from "./productSlice";

export default configureStore({
  reducer: {
    product,
  },
});
