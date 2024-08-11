import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { cartContext } from "../contexts/CartContext";

const CartLayout = () => {
  const { cart, clearCart, total } = useContext(cartContext);
  return (
    <>
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
    </>
  );
};

export default CartLayout;
