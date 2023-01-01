import React from "react";
import img from "../assets/Asgaardsofa1.png";

function Arrivals() {
  return (
    <section className="bg-[#FFF9E5] ">
      <div className="container mx-auto flex flex-col items-center text-center py-12 lg:py-16 gap-y-5 lg:flex-row lg:justify-between">
        <div>
          <img src={img} />
        </div>
        <div className="flex flex-col gap-y-6">
          <span className="font-semibold text-xl">New Arrivals</span>
          <h3 className="font-bold text-5xl lg:text-7xl  pb-14">
            Asgaard sofa
          </h3>
          <div>
            <button className="btn text-center mx-auto ">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
