import React from "react";
import Img1 from "../assets/13.png";
import Img2 from "../assets/img2.png";
import { Link } from "react-router-dom";

const data = [
  {
    url: Img1,
  },
  {
    url: Img2,
  },
];

function ViewMore() {
  return (
    <section className="bg-[#FAF4F4] text-center lg:text-start py-20">
      <div className="container mx-auto flex flex-col text-center  lg:justify-between lg:text-start lg:flex-row items-center">
        {data.map((img, i) => (
          <div
            key={i}
            className="flex flex-col justify-start gap-y-8 items-center"
          >
            <div className="items-center text-center ml-0  pt-5 max-w-[600px] max-h-[600px] lg:ml-10">
              <img src={img.url} />
            </div>
            <h3 className="text-5xl  font-semibold pb-9">side table</h3>
            <Link to="/shop">
              <button>View More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ViewMore;
