import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../store/cartSlice";

function TopProduct({ id, title, img, price }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  function addToCart() {
    const alreadyInCart = cart.find((ele) => ele.id === id);
    const data = {
      id,
      title,
      img,
      price,
    };
    if (!alreadyInCart) {
      dispatch(getItem(data));
    }
  }

  return (
    <div>
      <div className="cursor-pointer" onClick={() => addToCart()}>
        <img className="mx-auto" src={img} />
      </div>
      <p>{title}</p>
      <span> ${price}</span>
    </div>
  );
}

export default TopProduct;
