import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/Logo.png";
import Nav from "./Nav";
import NavMobile from "../components/NavMobile";
import { useSelector } from "react-redux";

function Header() {
  const location = useLocation();
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [totalInCart, setTotalInCart] = useState(0);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const { cart } = useSelector((state) => state.cart);
  const { product } = useSelector((state) => state.product);

  function getTotalNumber() {
    let totalCounter = 0;
    for (let i = 0; i < cart.length; i++) {
      totalCounter += cart[i].cartCount;
    }
    return totalCounter;
  }

  function openSearch() {
    setIsOpenSearch((prev) => !prev);
  }

  useEffect(() => {
    if (isOpenSearch) {
      inputRef.current.focus();
    }
  }, [isOpenSearch]);

  useEffect(() => {
    if (cart) {
      setTotalInCart(getTotalNumber());
    }
  }, [cart]);

  useEffect(() => {
    if (location.pathname === "/") {
      headerRef.current.style.backgroundColor = "#FBEBB5";
    } else {
      headerRef.current.style.backgroundColor = "#fff";
    }
  }, [location]);

  const [navMobileMenu, setNavMobileMenu] = useState(false);
  return (
    <header
      className=" flex justify-between   items-center  py-[30px] px-[10%] relative"
      ref={headerRef}
    >
      {/* <div className="flex justify-evenly  "> */}
      <div onClick={() => navigate("/")} className="cursor-pointer">
        {/* logo */}
        <img src={logo} />
      </div>
      <Nav />
      <div className="lg:hidden">
        {/* links mobile */}

        <div className="">
          {navMobileMenu ? (
            <AiOutlineClose
              className="absolute top-[32px] right-[131px] w-7 h-7 z-20"
              onClick={() => setNavMobileMenu(false)}
            />
          ) : (
            <FiMenu
              className="w-6 h-6"
              onClick={() => setNavMobileMenu(true)}
            />
          )}
        </div>
      </div>
      <div className="lg:hidden  absolute right-0 top-0 bg-[#FAF4F4]">
        <NavMobile
          navMobileMenu={navMobileMenu}
          cartIcon={<AiOutlineShoppingCart className="w-6 h-6" />}
          userIcon={<AiOutlineUser className="w-6 h-6" />}
          favoriteIcon={<MdFavoriteBorder className="w-6 h-6" />}
          totalInCart={totalInCart}
        />
      </div>
      <div className="hidden lg:flex">
        {/* icons */}
        <div className=" relative flex gap-x-9">
          <a>
            <AiOutlineUser className="w-6 h-6 cursor-pointer " />
          </a>

          <a>
            <BsSearch
              className="w-6 h-6  cursor-pointer"
              onClick={openSearch}
            />
          </a>

          {isOpenSearch && (
            <div>
              <input
                type="text"
                className="w-15 xl:w-60 h-10  outline-none  px-3 "
                ref={inputRef}
                onChange={(e) => setInputValue(e.target.value)}
              />

              <button className="p-1 py-1 xl:px- border  text-mainYellow border-gray-300 text-lg bg-gray-400  border-b-gray-300 ">
                Search
              </button>

              <div className="absolute">
                {product
                  .filter((item) => {
                    return inputValue && item.title.includes(inputValue);
                  })
                  .map((item) => (
                    <div className="bg-gray-100 text-center  mb-2 flex w-[306px] rounded-lg  justify-between hover:bg-gray-600">
                      <img
                        src={item.img}
                        className="w-[80px]  h-[64px] pr-4 px-2 bg-mainYellow "
                      />

                      <Link to={`shop/${item.id}`} className="py-2 px-2">
                        {inputValue && item.title}
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <a>
            <MdFavoriteBorder className="w-6 h-6 cursor-pointer" />
          </a>

          <Link to="/cart">
            <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer" />
          </Link>
          {cart.length >= 1 && (
            <span className="absolute right-[-8px] top-[-12px] px-[6px] text-sm bg-mainYellow rounded-full">
              {totalInCart}
            </span>
          )}
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Header;
