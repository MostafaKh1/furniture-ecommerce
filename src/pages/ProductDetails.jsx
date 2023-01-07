import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./../components/Header";
import DetailsSection from "../components/DetailsSection";

function ProductDetails() {
  const { product } = useSelector((state) => state.product);
  const { productID } = useParams();
  const thisItem = product.find((item) => item.id === +productID); // [+] cuz get id of string change it to number

  return (
    <div>
      <Header />
      <DetailsSection
        title={thisItem?.title}
        img={thisItem?.img}
        price={thisItem?.price}
        id={thisItem?.id}
      />
    </div>
  );
}

export default ProductDetails;