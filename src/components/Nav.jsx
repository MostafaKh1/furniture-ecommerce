import React from "react";

export default function Nav() {
  return (
    <nav className="hidden lg:flex">
      {/* links Desktop */}
      <ul className="flex  gap-x-12">
        <li className="">
          <a>Home</a>
        </li>
        <li>
          <a>Shop</a>
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
