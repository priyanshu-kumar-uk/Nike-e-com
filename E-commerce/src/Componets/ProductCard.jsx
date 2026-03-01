import React from "react";

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
  return (
    <div className="productcard">
      <div className="single-card">
        <div className="single-card-top">
          <div className="card-left">
            <div className="card-left-img">
              <img
                src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/b/bb0549fNike-IR0817-100_1.jpg?rnd=20200526195200&"
                alt=""
              />
            </div>
          </div>
          <div className="card-right">
            <div className="single-card-title">
              <h1>Nike</h1>
              <h2>Air Force 1'07 NN</h2>
            </div>
            <div className="single-card-price">
              <h1>₹ 8,895</h1>
              <p>Inclusive of all taxes</p>
            </div>
            <div className="select-size">
              <h2>Select Size</h2>
              <div className="shoes-size">
                {sizes.map((elem) => {
                  return (
                    <div className="shoes-size5">
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

