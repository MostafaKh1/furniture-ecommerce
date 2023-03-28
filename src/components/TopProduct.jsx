import React from "react";

import { Link } from "react-router-dom";

function TopProduct({ id, title, img, price }) {
  return (
    <div>
      <Link to={`/shop/${id}`} className="cursor-pointer">
        <img className="mx-auto" src={img} />
      </Link>
      <p>{title}</p>
      <span> ${price}</span>
    </div>
  );
}

export default TopProduct;
