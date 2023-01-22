import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function HeroShop() {
  const location = useLocation();
  const [pageElement, setPageElement] = useState(null);

  useEffect(() => {
    if (location.pathname === "/shop") {
      setPageElement("Shop");
    } else {
      setPageElement("Cart");
    }
  }, [location]);

  return (
    <section className="bg-shop py-12 lg:py-18  bg-no-repeat  bg-cover">
      <div className="flex flex-col gap-y-4 lg:gap-y-6 items-center py-16">
        <img className="" src={logo} />
        <h1 className="text-5xl">{pageElement}</h1>
        <div className="flex gap-x-2">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <span>{">"}</span>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroShop;
