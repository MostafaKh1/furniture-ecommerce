import React from "react";

function Footer() {
  return (
    <footer className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4   text-center lg:text-start gap-y-16">
        {/* up */}
        <div className="flex items-center justify-center">
          <p className="max-w-[180px]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <ul className="flex flex-col gap-y-4  lg:gap-y-8">
          <li className="text-gray-500">Links</li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-y-4 lg:gap-y-8">
          <li className="text-gray-500">Helps</li>
          <li>
            <a href="#">Payment Options</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Privacy Policies</a>
          </li>
        </ul>
        <div className="flex flex-col gap-y-6">
          <span className="text-gray-500 pb-6">Newsletter</span>
          <div className="flex flex-col gap-y-5 lg:flex-row gap-x-4 ">
            <input
              className="focus:outline-none pb-4  border-b-2 border-b-black"
              placeholder="Enter Your Email Address"
              type="text"
            />
            <button className="text-sm border-b-transparent lg:text-lg lg:border-b-black ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div>{/* down */}</div>
    </footer>
  );
}

export default Footer;
