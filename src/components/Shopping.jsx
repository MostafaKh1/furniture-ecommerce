import React from "react";

const data = [
  {
    title: "Free Delivery",
    text: "For all oders over $50, consectetur adipim scing elit.",
  },
  {
    title: "90 Days Return",
    text: "If goods have problems, consectetur adipim scing elit.",
  },
  {
    title: "Secure Payment",
    text: "100% secure payment, consectetur adipim scing elit.",
  },
];

function Shopping() {
  return (
    <section className="bg-[#FAF4F4] py-12 lg:py-16 ">
      <div className="container  mx-auto flex flex-col lg:flex-row lg:justify-between ">
        {data.map((ele, i) => (
          <div
            key={i}
            className=" text-center lg:text-start py-4 gap-y-4  lg:flex-row"
          >
            <div className="py-5 ">
              <h3 className="text-3xl font-semibold pb-3">{ele.title}</h3>
              <p className="text-gray-500 mx-auto lg:mx-0 text-xl w-[376px]">
                {ele.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shopping;
