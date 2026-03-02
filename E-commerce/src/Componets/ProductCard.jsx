import React, { useContext } from "react";
import {SINGLE_CART_STORAGE_KEY,getdata} from '../Utils/getstorage'
const ProductCard = () => {
  const sizes = [
    {
      size: "5.5",
    },
    {
      size: "6",
    },
    {
      size: "9",
    },
    {
      size: "7",
    },
    {
      size: "9",
    },
    {
      size: "7.5",
    },
  ];
 
  let carddata = getdata(SINGLE_CART_STORAGE_KEY)||{}
  
  return (
    <div className="productcard">
      <div className="single-card">
        <div className="single-card-top">
          <div className="card-left">
            <div className="card-left-img">
              <img
                src={carddata.URL}
                alt=""
              />
            </div>
          </div>
          <div className="card-right">
            <div className="single-card-title">
              <h1>Nike</h1>
              <h2>{carddata.name}</h2>
            </div>
            <div className="single-card-price">
              <h1>₹ {carddata.price}</h1>
              <p>Inclusive of all taxes</p>
            </div>
            <div className="select-size">
              <h2>Select Size</h2>
              <div className="shoes-size">
                {sizes.map((elem,index) => {
                  return (
                    <div className="shoes-size5" key={index}>
                      <h1>UK {elem.size}</h1>
                    </div>
                  );
                })}
              </div>
            </div>

          <div className="add-cart">ADD TO CART</div>
          </div>
        </div>
        <div className="w-cart">
          <div className="single-card-bottom">
          <div className="wishlist-card">WISH  <span>LIST</span></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

