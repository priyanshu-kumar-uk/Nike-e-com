import React from "react";
import { getdata, CART_STORAGE_KEY } from "../Utils/getstorage";
const Card = () => {
  let productdata = getdata(CART_STORAGE_KEY) || [];
  return (
    <div className="home-cards">
      {productdata.map((data) => {
        return (
          <div className="home-cart">
            <div className="home-cart-img">
              <div className="cart-img">
                <img
                  src={data.URL}
                  alt="Not Found"
                />
              </div>
            </div>
            <div className="home-cart-data">
              <div className="home-cart-title">{data.name}</div>
              <p>₹ {data.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
