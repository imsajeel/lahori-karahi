import React from "react";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div className={"product"}>
      <div>
        <h2>
          {product.name}{" "}
          {product.isVeg && (
            <div
              style={{
                background: "green",
                marginLeft: "1rem",
                padding: "0rem 0.5rem",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              V
            </div>
          )}
        </h2>
        <p className="discription">{product.discription}</p>
      </div>
      <p className="price">&#163; {product.price}</p>
    </div>
  );
};

export default ProductCard;
