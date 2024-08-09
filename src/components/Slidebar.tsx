import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SlidebarContext";
import { cartContext } from "../contexts/CartContext";

const Slidebar = () => {
  const { isOpen, SetIsOpen } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(cartContext);

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
      <div className="  flex flex-col gap-y-2 h-[520px] lg:h-[640px]  overflow-y-auto overflow-x-hidden border-b  border  ">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}

        <div className="  flex justify-between text-primary font-medium mt-4 px-4 py-2">
          <div className="  flex justify-center items-center">
            <span>Total:</span> {total} EGP
          </div>
          <div
            onClick={clearCart}
            className=" cursor-pointer py-4 bg-red-500 text-white w-12 text-white h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
