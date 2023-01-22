import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./store/productSlice";
import { getTotalAmount } from "./store/cartSlice";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
function App() {
  const dispatch = useDispatch();
  const { cart, cartTotalAmount } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getTotalAmount());
  }, [dispatch, cart]);

  console.log(cartTotalAmount);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/shop/:productID" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
