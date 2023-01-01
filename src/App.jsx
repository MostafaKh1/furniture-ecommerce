import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./store/productSlice";
import Home from "./pages/Home";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
