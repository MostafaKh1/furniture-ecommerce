import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/Logo.png";
import Nav from "./Nav";
import NavMobile from "../components/NavMobile";

function Header() {
  const [navMobileMenu, setNavMobileMenu] = useState(false);
  return (
    <header className="bg-[#FBEBB5] flex justify-between  items-center  py-[30px] px-[10%] relative">
      {/* <div className="flex justify-evenly  "> */}
      <div className="">
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
      <div className={`lg:hidden  absolute right-0 top-0 bg-[#FAF4F4]   `}>
        <NavMobile
          navMobileMenu={navMobileMenu}
          cart={<AiOutlineShoppingCart className="w-6 h-6" />}
          user={<AiOutlineUser className="w-6 h-6" />}
          favorite={<MdFavoriteBorder className="w-6 h-6" />}
        />
      </div>
      <div className="hidden lg:flex">
        {/* icons */}
        <div className="flex gap-x-9">
          <a>
            <AiOutlineUser className="w-6 h-6" />
          </a>

          <a>
            <BsSearch className="w-6 h-6" />
          </a>

          <a>
            <MdFavoriteBorder className="w-6 h-6" />
          </a>

          <a>
            <AiOutlineShoppingCart className="w-6 h-6" />
          </a>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}

export default Header;