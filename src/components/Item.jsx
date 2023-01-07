import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Item({ id, title, img, price }) {
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
    <div className="flex justify-center flex-col items-center w-full h-full  border rounded-md">
      <Link
        to={`/shop/${id}`}
        className="items-center cursor-pointer "
        onClick={() => addToCart()}
      >
        <img src={img} />
      </Link>
      <div className="  text-center  py-6 pl-0 md:text-start md:pl-6 ">
        <p className="mb-4 max-w-[225px]">{title}</p>
        <span className="font-bold text-2xl mt-5"> ${price}</span>
      </div>
    </div>
  );
}

export default Item;
