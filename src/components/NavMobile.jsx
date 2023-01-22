import React from "react";
import { Link } from "react-router-dom";

function NavMobile({
  navMobileMenu,
  userIcon,
  cartIcon,
  favoriteIcon,
  totalInCart,
}) {
  return (
    <>
      {navMobileMenu ? (
        <nav className="w-[300px] h-screen flex flex-col justify-center text-center pt-10 relative ">
          <ul className="flex flex-col text-center gap-y-5">
            <li>
              <Link className="text-2xl" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-2xl">
                Shop
              </Link>
            </li>
            <li>
              <a className="text-2xl">About</a>
            </li>
            <li>
              <a className="text-2xl">Contact</a>
            </li>
          </ul>
          <div className="flex gap-x-8 relative  justify-center pt-12 ">
            <div>{userIcon}</div>
            <div>{favoriteIcon}</div>
            <div>
              <Link to="/cart">{cartIcon}</Link>
              <span className="absolute top-9 text-sm bg-mainYellow px-[6px] rounded-full text-center items-center ">
                {totalInCart}
              </span>
            </div>
          </div>
          {/* <AiOutlineClose className="absolute top-[35px] left-[18px] w-7 h-7 z-20"  /> */}
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default NavMobile;
