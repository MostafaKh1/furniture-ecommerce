import React from "react";
import img from "../assets/Group34.png";

function InstagramPage() {
  return (
    <section className="bg-[#FAF4F4] py-12 lg:py-16 h-[520px] flex justify-center">
      <div className="flex flex-col justify-center text-center gap-y-6 lg:gap-y-8">
        <h1 className="font-bold text-3xl lg:text-5xl">Our Instagram</h1>
        <p className="font-semibold text-sm lg:text-md">
          Follow our store on Instagram
        </p>
        <div>
          <button className="btn-2">Follow Us</button>
        </div>
      </div>
    </section>
  );
}

export default InstagramPage;
