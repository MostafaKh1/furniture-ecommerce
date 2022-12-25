import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function NavMobile({ navMobileMenu, user, cart, favorite }) {
  return (
    <>
      {navMobileMenu ? (
        <nav className="w-[300px] h-screen flex flex-col justify-center text-center pt-10 relative ">
          <ul className="flex flex-col text-center gap-y-5">
            <li>
              <a className="text-2xl">Home</a>
            </li>
            <li>
              <a className="text-2xl">Shop</a>
            </li>
            <li>
              <a className="text-2xl">About</a>
            </li>
            <li>
              <a className="text-2xl">Contact</a>
            </li>
          </ul>
          <div className="flex gap-x-8 justify-center pt-12 ">
            <div>{user}</div>
            <div>{favorite}</div>
            <div>{cart}</div>
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
