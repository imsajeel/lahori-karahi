import React from "react";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div className="product">
      <img
        src={product.image ? product.image : "/images/image-notfound.png"}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <p className="discription">{product.discription}</p>
      <p className="price">&#163; {product.price}</p>
    </div>
  );
};

export default ProductCard;
