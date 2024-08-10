import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SlidebarContext";
import { cartContext } from "../contexts/CartContext";

const Slidebar = () => {
  const { isOpen, SetIsOpen } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(cartContext);

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
      <div className="  flex flex-col gap-y-2 h-3/5   overflow-y-auto overflow-x-hidden border-b  border  ">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="  flex justify-between text-primary font-medium mt-2  py-2">
        <div className="  flex justify-center items-center">
          <span>Total: </span> {Number(total.toFixed(2))} EGP
        </div>
        <div
          onClick={clearCart}
          className=" cursor-pointer py-4 bg-red-500 text-white w-12 text-white h-12 flex justify-center items-center text-xl"
        >
          <FiTrash2 />
        </div>
      </div>
      <div className="  flex flex-col ">
        <Link
          className=" bg-gray-200 text-center font-semibold p-3  mb-3"
          to={""}
        >
          View Cart
        </Link>
        <Link
          className=" text-white font-semibold text-center bg-black p-3  mb-3 "
          to={""}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Slidebar;
