import { Link } from "react-router-dom";
import CartLayout from "./CartLayout";
import { GiHandTruck } from "react-icons/gi";
import { useContext } from "react";
import { cartContext } from "../contexts/CartContext";

const Cart = () => {
  const { itemAmount } = useContext(cartContext);

  return (
    <div className={` container mx-auto h-screen  pt-28 `}>
      {itemAmount > 0 ? (
        <CartLayout />
      ) : (
        <div
          className={` flex flex-col justify-center items-center gap-y-4 h-2/3`}
        >
          <GiHandTruck className=" text-[150px] text-primary" />

          <h2 className=" font-medium capitalize ">
            your cart is empty add product to proceed{" "}
          </h2>
        </div>
      )}
      <div className="  flex flex-col ">
        <Link
          className={`
           
          text-white font-semibold text-center bg-black p-3  mb-3 `}
          to={"/checkout"}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
