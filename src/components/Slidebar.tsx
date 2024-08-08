import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SlidebarContext";
import { cartContext } from "../contexts/CartContext";
const Slidebar = () => {
  const { isOpen, SetIsOpen } = useContext(SidebarContext);
  const { cart } = useContext(cartContext);
  console.log(cart);
  return (
    <div
      className={`${
        isOpen ? "right-0" : " -right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}
    >
      <div className=" flex items-center py-6 border-b  justify-between">
        <div className=" uppercase text-sm font-semibold">
          Shopping Cart (0)
        </div>
        <div
          onClick={() => SetIsOpen(false)}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className=" text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Slidebar;
