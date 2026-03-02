import React from "react";
import { NavLink } from "react-router-dom";
import Products from "../Componets/Card";
import Card from "../Componets/Card";
import ProductCard from "../Componets/ProductCard";

const Home = () => {
  return (
    <div className="homepage">
      <div className="home-section">
        <div className="section1">
          <h1>NIKE</h1>
        </div>
        <div className="section2">
          <h1>JORDAN</h1>
          <div className="section2-data">
            <div className="section2-data-title">
              <h5>HIGH PINE</h5>
              <h2>GREEN</h2>
            </div>
            <div className="section2-data-para">
              <p>
                Nike air heel lets you handle epic stair counts and beacuse grip
                matters, zonal gum rubber on the outside adds traction where you
                nees it most
              </p>
            </div>
          </div>
        </div>
        <div className="home-products">
          <div className="home-pro-nav">
            <h3>
              Latest <span>Products</span>
            </h3>
          </div>
         <Card/>

           <div className="footer">
            <div className="pages">
                <h3>Pages</h3>
               <div className="footer-nav">
                  <NavLink to="/">Home</NavLink>
                 <NavLink to="/about">About Us</NavLink>
                 <NavLink to="/shoes">Shop</NavLink>
                 <NavLink to="/cart">Cart</NavLink>
               </div>
            </div>
           </div>
          
        </div>
      </div>
      <div className="shoes-img"></div>
    </div>
  );
};

export default Home;
