import React from "react";
import "./menuHome.css";
import products from "../../db/products";

const MenuHome = () => {
  return (
    <div className="menu-homepage">
      <h2 className="title">Fresh from Lahori</h2>
      <h1 className="special">OUR SPECIAL MENU</h1>
      <nav>
        <li className="active">STARTERS</li>
        <li>MAIN</li>
        <li>SUNDRIES</li>
        <li>DESSERTS</li>
        <li>DRINKS</li>
      </nav>
      <div className="product-list">
        {products.map((product, i) => (
          <div key={i} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="discription">{product.discription}</p>
            <p className="price">&#163; {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuHome;
