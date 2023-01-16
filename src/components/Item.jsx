import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

function Item({ id, title, img, price }) {


  return (
    <div className="flex flex-col   justify-center  items-center">
      <div className="border flex justify-center max-w-[278px] h-[278px] items-center  ">
        <Link
          to={`/shop/${id}`}
          className="items-center mx-auto cursor-pointer  "
        >
          <img className="" src={img} />
        </Link>
      </div>
      <div className="  text-center  py-6 pl-0 md:text-start md:pl-6 ">
        <p className="mb-4 max-w-[225px]">{title}</p>
        <span className="font-bold text-2xl mt-5"> ${price}</span>
      </div>
    </div>
  );
}

export default Item;
