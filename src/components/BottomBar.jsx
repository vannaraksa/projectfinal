import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";

function BottomBar() {
  return (
    <div className="container-flluid d-lg-none bg-purple-900 fixed-bottom py-0">
      <div className="nav justify-content-between">
        <a href="" className="text-decoration-none text-center text-light py-0">
          <FaHome className="fs-2" />
          <p className="m-0">Home</p>
        </a>
        <a href="" className="text-decoration-none text-center text-light py-0">
          <AiFillProduct className="fs-2" />
          <p className="m-0">Product</p>
        </a>
        <a href="" className="text-decoration-none text-center text-light py-0">
          <MdPermContactCalendar className="fs-2" />
          <p className="m-0">Contact</p>
        </a>
        <a href="" className="text-decoration-none text-center text-light py-0">
          <FaCartShopping className="fs-2" />
          <p className="m-0">cart</p>
        </a>
        <a href="" className="text-decoration-none text-center text-light py-0">
          <MdAccountCircle className="fs-2" />
          <p className="m-0">Account</p>
        </a>
      </div>
    </div>
  );
}

export default BottomBar;
