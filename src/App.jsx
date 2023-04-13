import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./store/productSlice";
import { getTotalAmount } from "./store/cartSlice";

import ProductDetails from "./pages/ProductDetails";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  const dispatch = useDispatch();
  const { cart, cartTotalAmount, orderDone } = useSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getTotalAmount());
  }, [dispatch, cart]);
  console.log(orderDone);
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/shop/:productID" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
