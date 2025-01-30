import React, { useContext } from "react";
import { IoCart, IoEye, IoHeart } from "react-icons/io5";
import ProductContext from "../store/ProductProvider";
import Skelaton from "./Skelaton";
import { ToastContainer } from "react-toastify";

function Cart() {
  const {product,loading,addToCart} = useContext(ProductContext);
  return (
    <div className="container p-0">
      <ToastContainer/>
      <h3>All-Product</h3>
      <hr />
      <div className="row m-0">
        {
          loading ? (
            (<Skelaton/>)
          ) : (
            product.map((e,i)=>{
              return(
                <div className="col-6 col-md-4 col-lg-3 my-2" key={i}>
                <div className="card overflow-hidden shadow">
                  <div style={{ height: 200 }} className="w-100 bg-purple-500">
                    <img src={e.image} alt="" className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div className="card-body text-center">
                    <p className="m-0 text-3line">{e.description}</p>
                    <h4 className="text-1line">{e.name}</h4>
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">${e.price}</p>
                      <p>{e.rating} rating</p>
                    </div>
                    <div className="d-flex justify-content-center border-top py-3">
                      <button className="btn border-0 fs-3 px-2">
                        <IoHeart />
                      </button>
                      <button onClick={()=>addToCart(e.id)} className="btn border-0 fs-3 px-2">
                        <IoCart />
                      </button>
                      <button className="btn border-0 fs-3 px-2">
                        <IoEye />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
          )
        }
      </div>
    </div>
  );
}

export default Cart;
