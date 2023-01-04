import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

function Product() {
  const { product } = useSelector((state) => state.product);
  return (
    <section className="bg-[#FFF] py-12 lg:py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 gap-y-6">
        {product.map(({ id, title, img, price }) => (
          <Item key={id} id={id} title={title} img={img} price={price} />
        ))}
      </div>
    </section>
  );
}

export default Product;
