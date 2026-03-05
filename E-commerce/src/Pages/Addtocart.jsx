import React from "react";
import Card from "../Componets/Card";
import { getdata, CART_STORAGE_KEY } from "../Utils/getstorage";
import { NavLink } from "react-router-dom";
import {setdata} from '../Utils/setstorage'
import {useState} from 'react'
const Addtocart = () => {
  // let data = 
  const [removedata, setremovedata] = useState(getdata(CART_STORAGE_KEY) || [])   //ui show data
 
function remove(id){
  let filterdata  =  removedata.filter((elem)=>{
    return  elem.id!==id                
   })
   setdata(CART_STORAGE_KEY,filterdata)        // for localstorage
   setremovedata(filterdata)                   // for UI
}


  return (
    <div className="checkout">
     {
      removedata.map((elem)=>{
   return  <div className="cart-chekout">
        <div className="checkout-right">
          <h1>Bag</h1>
          <div className="shoes-info">
            <div className="shoes-info-img">
              <img
                src={elem.URL}
                alt=""
              />
            </div>
            <div className="shoes-info-data">
              <h1>{elem.name}</h1>
              <p>Men's Shoes</p>
              <p>14 day Return</p>
              <NavLink to= "/productcard"><p>Size UK 7</p></NavLink>
            </div>
          </div>
          <div className="checkout-btn">
            <div className="cartbtn">
              <button onClick={()=>remove(elem.id)}>
                <i class="ri-delete-bin-6-line"></i>
              </button>
              <p>{elem.quantity}</p>
              <button>+</button>
            </div>
            <div className="add-wishlist">
              <i class="ri-heart-line"></i>
            </div>
          </div>
        </div>
        <div className="checkout-left">
          <h1>Summary</h1>
          <div className="shoes-payment">
            <div className="total">
              <h4>Bag Total</h4>
              <p>₹ {elem.price*elem.quantity}</p>
            </div>
            <div className="total">
              <h4>Sub Total</h4>
              <p>₹ {elem.price*elem.quantity}</p>
            </div>
            <div className="totalf">
            <h4>Shipping Charges</h4>
             <p>Free</p>
             </div>
            <div className="total">
              <h4>You Pay</h4>
              <p>₹{elem.price*elem.quantity}</p>
            </div>
          </div>
          <div className="payment-btn">
            <button>Proceed to Buy</button>
          </div>
        </div>
      </div>
      })
     }
      
      
    </div>
  );
};

export default Addtocart;
