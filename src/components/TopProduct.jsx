import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

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
      <Link
        to={`/shop/${id}`}
        className="cursor-pointer"
        onClick={() => addToCart()}
      >
        <img className="mx-auto" src={img} />
      </Link>
      <p>{title}</p>
      <span> ${price}</span>
    </div>
  );
}

export default TopProduct;
