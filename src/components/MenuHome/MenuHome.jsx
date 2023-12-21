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
import ProductCard from "./ProductCard";

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
      <div class="custom-shape-divider-top-1703116812">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

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
      {/* {productCategories.map((productCat) =>
        productCat.subCategories.map((productSubCat) => (
          <div>{productSubCat.subCategory}</div>
        ))
      )} */}
      <div className="product-list">
        {isLoading ? (
          <img
            className="loading-img"
            src="https://cdn.dribbble.com/users/1417337/screenshots/5750630/bubble-loader.gif"
            alt="Loading......"
          />
        ) : filteredProducts.length ? (
          filteredProducts.map((product) => <ProductCard product={product} />)
        ) : (
          <div className="no-item-found">
            <FaRegMeh size={"4rem"} />
            <h2>No Item Found!</h2>
          </div>
        )}
      </div>
      <div class="custom-shape-divider-bottom-1703116722">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MenuHome;
