import React, { useEffect, useState } from "react";
import "./menuHome.css";
import products from "../../db/products";
import {
  DESSERTS,
  DRINKS,
  MAIN,
  STARTERS,
  SUNDRIES,
} from "./menuProductCategoryType";
import { FaRegMeh } from "react-icons/fa";

const MenuHome = () => {
  const [menuProductCategory, setMenuProductCategory] = useState(STARTERS);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const filtered = products.filter(
      (product) => product.category === menuProductCategory
    );
    if (filtered.length > 0) {
      setFilteredProducts(filtered);
      setIsLoading(false);
    } else {
      setFilteredProducts([]);
      setTimeout(() => setIsLoading(false), [5000]);
    }
  }, [menuProductCategory]);

  return (
    <div className="menu-homepage" id="menu">
      <h2 className="title">Fresh from Lahori</h2>
      <h1 className="special">OUR SPECIAL MENU</h1>
      <nav>
        <li
          className={menuProductCategory === STARTERS ? "active" : ""}
          onClick={() => setMenuProductCategory(STARTERS)}
        >
          STARTERS
        </li>
        <li
          className={menuProductCategory === MAIN ? "active" : ""}
          onClick={() => setMenuProductCategory(MAIN)}
        >
          MAIN
        </li>
        <li
          className={menuProductCategory === SUNDRIES ? "active" : ""}
          onClick={() => setMenuProductCategory(SUNDRIES)}
        >
          SUNDRIES
        </li>
        <li
          className={menuProductCategory === DESSERTS ? "active" : ""}
          onClick={() => setMenuProductCategory(DESSERTS)}
        >
          DESSERTS
        </li>
        <li
          className={menuProductCategory === DRINKS ? "active" : ""}
          onClick={() => setMenuProductCategory(DRINKS)}
        >
          DRINKS
        </li>
      </nav>
      <div className="product-list">
        {isLoading ? (
          <img
            className="loading-img"
            src="https://cdn.dribbble.com/users/1417337/screenshots/5750630/bubble-loader.gif"
            alt="Loading......"
          />
        ) : filteredProducts.length ? (
          filteredProducts.map((product, i) => (
            <div key={i} className="product">
              <img
                src={
                  product.image ? product.image : "/images/image-notfound.png"
                }
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p className="discription">{product.discription}</p>
              <p className="price">&#163; {product.price}</p>
            </div>
          ))
        ) : (
          <div className="no-item-found">
            <FaRegMeh size={"4rem"} />
            <h2>No Item Found!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuHome;
