import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {setdata} from '../Utils/setstorage'
import {getdata,CART_STORAGE_KEY} from '../Utils/getstorage'
const Productform = () => {
  console.log("form redering")
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function formhandle(data){
   let productdata =  getdata(CART_STORAGE_KEY)||[]  // maine phele data isliye get kiya because i want have array
   let latestdata  =[...productdata,data]
    setdata(CART_STORAGE_KEY,latestdata)
    reset()
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
          <textarea
            placeholder="Enter Product Discription"
            {...register("dicription", { required: true })}
          ></textarea>
          <Button />
         
        </form>
      </div>
    </div>
  );
};

export default Productform;
