import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItem, decreaseCart } from "../store/cartSlice";

function DetailsSection({ title, img, price, id }) {
  const { cart } = useSelector((state) => state.cart);
  const thisProduct = cart.find((item) => item.id === id);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const dispatch = useDispatch();

  function addToCart() {
    const data = {
      id,
      title,
      img,
      price,
      size: sizeData[selectedIndex].size,
    };
    dispatch(getItem(data));
  }

  console.log(thisProduct);

  function decrease(data) {
    if (thisProduct) {
      dispatch(decreaseCart(data));
    }
  }

  const sizeData = [
    {
      size: "XS",
    },
    {
      size: "L",
    },
    {
      size: "XL",
    },
  ];

  return (
    <section className="container bg-[#fff] mx-auto py-14 lg:py-20">
      <div className="flex gap-x-6 px-4 ">
        <Link to="/" className="text-gray-500">
          Home {" >"}
        </Link>
        <Link to="/shop" className="text-gray-500">
          Shop {">"}
        </Link>
        <span>|</span>
        <div className="font-semibold">{title}</div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly  ">
        <div className="pt-12 lg:pt-16 flex justify-between gap-x-8">
          {/* left */}
          <div className="flex flex-col gap-y-6">
            {/* small imgs */}
            <img width={78} height={80} src={img} className="bg-mainYellow" />
            <img width={78} height={80} src={img} className="bg-mainYellow" />
            <img width={78} height={80} src={img} className="bg-mainYellow" />
            <img width={78} height={80} src={img} className="bg-mainYellow" />
          </div>
          <div>
            {/* big one */}
            <img
              className="bg-mainYellow rounded-lg  object-contain w-[450px] h-[450px]"
              src={img}
            />
          </div>
        </div>
        <div className="text-center lg:text-start pt-16 lg:pt-0 ">
          {/* right */}
          <div className="flex flex-col   mt-16 mx-auto gap-y-6">
            {/* text */}
            <h1 className="">{title}</h1>
            <div className="text-3xl text-gray-500"> ${price}</div>
            {/* stars */}
            <p className="font-semibold mx-auto max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis magni neque aliquid, hic saepe expedita aut
              voluptatibus adipisci, earum culpa sequi sed quibusdam ipsa
              dolores odit beatae fugit velit. Culpa!
            </p>
          </div>
          <div className="mt-4">
            {/* size */}
            <div className="text-gray-500 pb-4">Size</div>
            <div className="flex text-center justify-center lg:justify-start gap-x-5">
              {/* <div className="size">L</div>
              <div className="size">XL</div>
              <div className="size">XS</div> */}

              {sizeData.map((item, index) => {
                return (
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className={`size ${
                      selectedIndex === index ? "bg-mainYellow" : ""
                    }`}
                  >
                    {item.size}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-4 ">
            <div className="relative mx-auto lg:mx-0 py-4">
              <input
                className="  w-[100px] text-center border border-[#9F9F9F] rounded-lg  h-[50px]"
                type="text"
                onChange={(e) => setCount(e.target.value)}
                value={thisProduct ? thisProduct.cartCount : "0"}
              />
              <div
                className="absolute   cursor-pointer text-2xl left-2 top-3"
                onClick={() => decrease(thisProduct)}
              >
                _
              </div>
              <div
                className="absolute   cursor-pointer text-2xl left-20  top-5"
                onClick={() => addToCart()}
              >
                +
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="add-cart" onClick={() => addToCart()}>
                Add To Cart
              </button>
            </div>
            {/* <div>{thisProduct.cartCount}</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
