import { getdata,PRODUCTS_STORAGE_KEY } from "../Utils/getstorage";
import { useNavigate } from "react-router-dom";

const Card = () => {
  let productdata = getdata(PRODUCTS_STORAGE_KEY) || [];
  let navigate = useNavigate()

  function cardclik(id){     
     navigate(`/productcard/${id}`)
  }
  
  return (
    <div className="home-cards">
      {productdata.map((data) => {
        return (
          <div className="home-cart" onClick={()=>cardclik(data.id)}>
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
