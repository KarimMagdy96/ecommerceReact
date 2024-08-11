import { Link } from "react-router-dom";
import CartLayout from "./CartLayout";
const Cart = () => {
  return (
    <div className=" container mx-auto h-screen   pt-28">
      <CartLayout />
      <div className="  flex flex-col ">
        <Link
          className=" text-white font-semibold text-center bg-black p-3  mb-3 "
          to={"/checkout"}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
