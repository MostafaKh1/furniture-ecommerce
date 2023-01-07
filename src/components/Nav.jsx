import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="hidden lg:flex">
      {/* links Desktop */}
      <ul className="flex  gap-x-12">
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
