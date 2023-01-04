import React from "react";
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";

function Ourblogs() {
  const data = [
    {
      img: blog1,
    },
    {
      img: blog2,
    },
    {
      img: blog3,
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-12 lg:py-18 items-center ">
        <div className="items-center text-center gap-y-8">
          {/* text */}
          <h1 className="py-4">Top Picks For You</h1>
          <p>
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className=" grid  grid-cols-1 md:grid-cols-3 py-14 lg:py-16 text-center ">
          {data.map((ele, i) => (
            <div className="py-6" key={i}>
              <div>
                <div>
                  <img className="mx-auto" src={ele.img} />
                </div>
                <p className="py-6 ">Going all-in with millennial design</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-5">
          <button>View All Post</button>
        </div>
      </div>
    </section>
  );
}

export default Ourblogs;
