import React from "react";
import { useSelector } from "react-redux";
import TopProduct from "./TopProduct";

export default function TopPicks() {
  const { product } = useSelector((state) => state.product);

  const FourProduct = product.slice(0, 4);

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
        <div>
          {/* <TopProduct product={product} dispatch={dispatch} getItem={getItem} /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center ">
            {FourProduct.map(({ id, title, img, price }) => (
              <TopProduct
                key={id}
                id={id}
                title={title}
                img={img}
                price={price}
              />
            ))}
          </div>
          <div className="mx-auto py-14 text-center lg:mt-10 ">
            <button>View More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
