import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { setdata } from "../Utils/setstorage";
import { getdata, CART_STORAGE_KEY,PRODUCTS_STORAGE_KEY } from "../Utils/getstorage";
const Productform = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
 
  let navigate = useNavigate();

  function formhandle(data) {
    let productdata = getdata(PRODUCTS_STORAGE_KEY) || []; // maine phele data isliye get kiya because i want have array
    let latestdata = [...productdata, {...data,id:Date.now()}];  
    setdata(PRODUCTS_STORAGE_KEY, latestdata);
    navigate("/createProduct");
    reset();
  }

  return (
    <div className="product-form">
      <div className="form-create">
        <form onSubmit={handleSubmit(formhandle)}>
          <input
            type="url"
            placeholder="Product Image URL"
            {...register("URL", { required: true })}
          />
          <input
            type="text"
            placeholder="Enter Product Name"
            {...register("name", { required: true })}
          />
          <input
            type="number"
            placeholder="Enter Product Price"
            {...register("price", { required: true })}
          />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Productform;
