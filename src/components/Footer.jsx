import React from "react";
import { IoMdClock } from "react-icons/io";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="container-fluid bg-purple-300 mb-5 pb-5 mb-lg-0 py-lg-3">
      <div className="container">
        <div className="row m-0 align-items-center">
          <div className="col-lg-6 pb-3 text-center">
            <h4 className="fw-bold m-0">Subcribe Our Newletter</h4>
            <p className="m-0">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="col-lg-6 pb-3">
            <form action="" className="d-flex">
              <input
                type="text"
                className="form-control rounded-0 shadow-none border-0"
                placeholder="Type to search..."
              />
              <button className="btn btn-danger rounded-0 shadow-none px-1">
                Subcribe
              </button>
            </form>
          </div>
        </div>
        <div className="row m-0 border-top border-secondary-subtile py-2">
          <div className="row m-0 col-lg-6 py-3 px-0">
            <div className="col-md-6 ">
              <h4>Useful Link</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="nav-link py-1 ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1 ">
                    All Product
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1 ">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1 ">
                    My Account
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>Contact Information</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="nav-link py-1 ">
                    <IoLocation className="fs-3 me-1" />
                    2002,PP
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1 ">
                    <IoCall className="fs-3 me-1"/>
                    +855 019 443 222
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1 ">
                    <IoMail className="fs-3 me-1"/>
                    aa@gmail.com
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link py-1 ">
                    <IoMdClock className="fs-3 me-1"/>
                    Mon - sun / 7-00am : 8-00pm
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994803.924744873!2d99.95651325721403!3d12.100120818682004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2z4Z6A4Z6Y4Z-S4Z6W4Z674Z6H4Z62!5e0!3m2!1skm!2skh!4v1736921499473!5m2!1skm!2skh"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowfullscreen=""
              // loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row m-0 border-top border-secondary-subtilte">
          <div className="col-6 py-2 ">
            Copy right © 2025 All Right Derserved
          </div>
          <div className="col-6 py-2  text-md-end">
            Design & Developer by KOKO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
