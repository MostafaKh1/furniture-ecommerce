import React from "react";
import CartDetails from "../components/CartDetails";
import Header from "../components/Header";
import HeroShop from "./../components/HeroShop";
import Shopping from "./../components/Shopping";
import Footer from "./../components/Footer";

function Cart() {
  return (
    <div>
      <Header />
      <HeroShop />
      <CartDetails />
      <Shopping />
      <Footer />
    </div>
  );
}

export default Cart;
