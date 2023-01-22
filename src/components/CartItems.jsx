import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

function CartItems({ id, title, img, price, cartCount }) {
  const dispatch = useDispatch();
  return (
    <div className=" flex justify-between pr-12 max-w-[1200px] md:grid md:pr-0 grid-cols-6 pb-8  text-center lg:text-start">
      <Link className="  md:col-span-2" to={`/shop/${id}`}>
        <img
          className="max-w-[106px] rounded-lg mr-5 max-h-[106px] bg-[#FBEBB5]"
          src={img}
        />
      </Link>

      <h5 className="w-[120px]  text-sm text-gray-500 ">{title}</h5>
      <span className=" text-gray-500">${price}</span>
      <div>
        <span className="text-gray-500 rounded-lg ml-4 border px-[10px] py-[5px] text-center items-center">
          {cartCount}
        </span>
      </div>
      <span className="font-semibold">${cartCount * price}</span>
      <div className="flex justify-center pt-0 pb-10 md:pt-5 ">
        <MdDelete
          onClick={() => dispatch(removeFromCart(id))}
          size={30}
          className="text-[#FBEBB5] mr-0 md:mr-6  "
        />
      </div>
    </div>
  );
}

export default CartItems;
