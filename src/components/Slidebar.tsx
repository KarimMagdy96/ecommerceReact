import { useContext } from "react";

import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SlidebarContext";
import { cartContext } from "../contexts/CartContext";
import CartLayout from "./CartLayout";

const Slidebar = () => {
  const { isOpen, SetIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(cartContext);
  CartLayout;
  return (
    <div
      className={`${
        isOpen ? "right-0" : " -right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:w-[32vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}
    >
      <div className=" flex items-center py-6 border-b  justify-between">
        <div className=" uppercase text-sm font-semibold">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={() => SetIsOpen(false)}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className=" text-2xl" />
        </div>
      </div>
      <CartLayout />
      <div className="  flex flex-col ">
        <Link
          onClick={() => SetIsOpen(false)}
          className=" text-white font-semibold text-center bg-black p-3  mb-3 "
          to={"/cart"}
        >
          View In Cart
        </Link>
      </div>
    </div>
  );
};

export default Slidebar;
