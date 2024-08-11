import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { cartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, clearCart, total } = useContext(cartContext);

  return (
    <div className=" container mx-auto">
      <div className=" flex items-center py-6 border-b  justify-between"></div>
      <div className="  flex flex-col gap-y-2 h-3/5   overflow-y-auto overflow-x-hidden border-b    ">
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
          className=" text-white font-semibold text-center bg-black p-3  mb-3 "
          to={""}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
