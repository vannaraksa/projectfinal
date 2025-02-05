import React, { useContext } from "react";
// import { ImCoinDollar } from "react-icons/im";
// import { IoGift, IoMdClock } from "react-icons/io";
// import { IoCar } from "react-icons/io5";

import { GoGift } from "react-icons/go";
import { FaCarSide } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import ProductContext from "../store/ProductProvider";
import Cart from "../components/Card";
function Home() {
  const { product } = useContext(ProductContext);
  return (
    <div classNameName="container-fluid p-0">
      <div classNameName="container-fluid p-0 pt-4 px-3">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner position-relative">
            <div
              className="carousel-item active  "
              data-bs-interval="10000"
              style={{ height: "70vh" }}
            >
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-center text-light">
                <h1>THE BIGGEST SALE</h1>
                <h2>Specail for today</h2>
                <button className="btn bg-purple-900 text-light mt-3">
                  Shop Now
                </button>
              </div>
              <img
                src="https://i.pinimg.com/736x/f5/4e/a8/f54ea802686fb1a93504b8721d8a6ca6.jpg"
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
                style={{ filter: "brightness(60%)" }}
              />
            </div>
            <div
              className="carousel-item"
              data-bs-interval="2000"
              style={{ height: "70vh" }}
            >
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-center text-light">
                <h1>THE BIGGEST SALE</h1>
                <h2>Specail for today</h2>
                <button className="btn bg-purple-900 text-light mt-3">
                  Shop Now
                </button>
              </div>
              <img
                src="https://i.pinimg.com/736x/f9/15/ae/f915aea9ff3c7c8f0e5af1a1a3d1e712.jpg"
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
                style={{ filter: "brightness(60%)" }}
              />
            </div>
            <div className="carousel-item" style={{ height: "70vh" }}>
              <div className="position-absolute z-3 top-50 start-50 translate-middle text-center text-light">
                <h1>THE BIGGEST SALE</h1>
                <h2>Specail for today</h2>
                <button className="btn bg-purple-900 text-light mt-3">
                  Shop Now
                </button>
              </div>
              <img
                src="https://i.pinimg.com/736x/83/6f/bb/836fbb81d7668295a4bdc75b66409522.jpg"
                className="d-block w-100 h-100 object-fit-cover"
                alt="..."
                style={{ filter: "brightness(60%)" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* service */}
        <div className="d-flex justify-content-start my-3 overflow-auto">
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="d-flex justify-content-center align-items-center shadow p-2 rounded-3">
              {/* <IoGift /> */}
              <GoGift style={{ fontSize: 74 }} />
              <div className="ms-2">
                <h4 className="m-0 ">BONUS PLUS</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="d-flex justify-content-center align-items-center shadow p-2 rounded-3">
              <FaCarSide style={{ fontSize: 74 }} />
              <div className="ms-2">
                <h4 className="m-0 ">Delivery</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="d-flex justify-content-center align-items-center shadow p-2 rounded-3">
              <AiFillDollarCircle style={{ fontSize: 74 }} />
              <div className="ms-2">
                <h4 className="m-0 ">Discount</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3 px-3">
            <div className="d-flex justify-content-center align-items-center shadow p-2 rounded-3">
              <FaRegClock style={{ fontSize: 74 }} />
              <div className="ms-2">
                <h4 className="m-0 ">Open 24/7</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="row m-0">
          <div className="col-lg-5 p-0 pe-lg-2" style={{ height: 780 }}>
            <div
              className="w-100 bg-danger h-respones position-relative img-1"
              style={{ height: "60%" }}
            >
              <div
                className="position-absolute z-3 text-light"
                style={{ left: "10%", top: "20%" }}
              >
                <h4>THE BIGGEST SALE</h4>
                <p>Specail for today</p>
                <button className="btn btn-outline-light mt-3 text-uppercase">
                  Shop Now
                </button>
              </div>
              <img
                src="https://api.ellecanada.com/app/uploads/2024/07/Drugstore-sensitive-skin.png"
                alt=""
                className="w-100 h-100 object-fit-cover"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <div className="row m-0 pt-3 h-respones" style={{ height: "40%" }}>
              <div className="col-12 col-lg-6 p-0 pe-lg-2">
                <div className="w-100 bg-purple-700 h-100 position-relative img-2">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.415)" }}
                    className="h-100 w-100 position-absolute z-3 top-50 start-50 translate-middle text-center text-light w-100"
                  >
                    <h5 className="mt-3">THE BIGGEST SALE</h5>
                    <p>Specail for today</p>
                    <button className="btn btn-outline-light mt-3 text-uppercase">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 p-0 ps-lg-2">
                <div className="w-100 bg-warning h-100 position-relative img-3">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.415)" }}
                    className="position-absolute z-3 h-100 w-100 top-50 start-50 translate-middle text-center text-light"
                  >
                    <h5 className="mt-3">THE BIGGEST SALE</h5>
                    <p>Specail for today</p>
                    <button className="btn btn-outline-light mt-3 text-uppercase ">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 p-0 pe-lg-2" style={{ height: 780 }}>
            <div className="row m-0 pb-3 h-respones" style={{ height: "40%" }}>
              <div className="col-12 col-lg-6 p-0 pe-lg-2">
                <div className="w-100 bg-warning h-100 position-relative img-3">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.415)" }}
                    className="position-absolute z-3 h-100 w-100 top-50 start-50 translate-middle text-center text-light"
                  >
                    <h5 className="mt-3">THE BIGGEST SALE</h5>
                    <p>Specail for today</p>
                    <button className="btn btn-outline-light mt-3 text-uppercase ">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 p-0 ps-lg-2">
                <div className="w-100 bg-purple-700 h-100 position-relative img-2">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.415)" }}
                    className="h-100 w-100 position-absolute z-3 top-50 start-50 translate-middle text-center text-light w-100"
                  >
                    <h5 className="mt-3">THE BIGGEST SALE</h5>
                    <p>Specail for today</p>
                    <button className="btn btn-outline-light mt-3 text-uppercase">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-100 bg-danger h-respones position-relative img-1"
              style={{ height: "60%" }}
            >
              <div
                className="position-absolute z-3 text-light"
                style={{ left: "10%", top: "20%" }}
              >
                <h4>THE BIGGEST SALE</h4>
                <p>Specail for today</p>
                <button className="btn btn-outline-light mt-3 text-uppercase">
                  Shop Now
                </button>
              </div>
              <img
                src="https://api.ellecanada.com/app/uploads/2024/07/Drugstore-sensitive-skin.png"
                alt=""
                className="w-100 h-100 object-fit-cover"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
          </div>
        </div>

        <Cart />
        {/* <ul>
          {
            product.map((e,i)=>{
              return(
                <li key={i}>{e.name}</li>
              )
            })
          }
        </ul> */}
      </div>
    </div>
  );
}

export default Home;
