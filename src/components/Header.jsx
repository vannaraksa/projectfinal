import React, { useContext, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import ProductContext from "../store/ProductProvider";
import Cart from "../pages/Cart";

function Header() {
  const { data,cart } = useContext(ProductContext);
  const [isLogin, setIslogin] = useState();

  // alert(data);
  return (
    <>
      <nav className="container-fluid navbar bg-purple-900">
        <div className="container">
          <div className="col-3 ">
            <a href="" className="fw-bold text-decoration-none text-light fs-2">
              LOGO
            </a>
          </div>
          <div className="col-9 col-lg-6 bg-body rounded-4 overflow-hidden">
            <form action="" className="d-flex">
              <select
                name=""
                id=""
                className="w-50 form-select d-none d-md-block rounded-0 shadow-none border-start"
              >
                <option value="">All Category</option>
              </select>
              <input
                type="text"
                className="form-control rounded-0 shadow-none border-0"
                placeholder="Type to search..."
              />
              <button className="btn shadow-none border-0">
                <IoMdSearch />
              </button>
            </form>
          </div>
          <div className="d-none d-lg-flex align-items-center justify-content-end col-3 text-end">
            <NavLink
              to="/cart"
              className="text-light text-decoration-none position-relative"
            >
              <TiShoppingCart className="fs-3" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </NavLink>

            {isLogin ? (
              <div className="ms-5">
                <div className="dropdown d-flex">
                  <div
                    className="rounded-circle bg-purple-300 overflow-hidden border"
                    style={{ width: 40, height: 40 }}
                  >
                    <img
                      src="https://i.pinimg.com/736x/62/d5/e7/62d5e7673f1ce5043bd266f6dbba99c8.jpg"
                      alt=""
                      className="w- 100 h-100 object-fit-cover"
                    />
                  </div>
                  <button
                    class="btn dropdown-toggle border-0 shadow-none text-light ps-1"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User Account
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <NavLink
                        class="dropdown-item text-decoration-none"
                        to="/myaccount"
                      >
                        My Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item text-decoration-none" to="#">
                        Setting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink class="dropdown-item text-decoration-none" to="#">
                        Log Out
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="ms-4">
                <button
                  className="btn btn-light rounded-0 px-3"
                  onClick={() => setIslogin(true)}
                >
                  Register
                </button>
                <button
                  className="btn border rounded-0 text-light px-3"
                  onClick={() => setIslogin(true)}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="container-fluid shadow d-none d-lg-block">
        <ul className="nav justify-content-center">
          <li className="px-2 py-1 text-uppercase">
            <NavLink to="/" className="text-decoration-none text-dark">
              Home
            </NavLink>
          </li>
          <li className="px-2 py-1 text-uppercase">
            <NavLink to="/product" className="text-decoration-none text-dark">
              All Products
            </NavLink>
          </li>
          <li className="px-2 py-1 text-uppercase">
            <NavLink to="/contact" className="text-decoration-none text-dark">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
