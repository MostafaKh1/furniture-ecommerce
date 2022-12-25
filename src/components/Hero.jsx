import React from "react";
import HeroIMG from "../assets/hero.png";

function Hero() {
  return (
    <section className="bg-[#FBEBB5] pt-10 pb-0">
      <div className="container mx-auto flex flex-col items-center gap-y-5 lg:flex lg:flex-row lg:justify-between  lg:pl-8">
        <div className="text-center lg:text-start">
          {/* Text */}
          <h1 className="max-w-[400px] lg:max-w-[640px]  xl:max-w-[500px]  mb-5  text-5xl lg:text-7xl  ">
            Rocket single seater
          </h1>
          <button className="pt-12 lg:pt-16">Shop Now</button>
        </div>
        <div className="pt-15">
          <img src={HeroIMG} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
