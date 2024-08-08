import React from "react";
import { product } from "./../contexts/ProdactContext";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: object;
    amount?: number;
  };
}
const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className=" flex gap-x-4  py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px]  gap-x-4 flex items-center">
        <Link to={`/product/${id}`}>
          <img className=" max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex  flex-col ">
          <div className=" flex justify-between mb-2">
            <Link
              className=" text-sm font-medium uppercase max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div className=" text-xl cursor-pointer">
              <IoMdClose className=" text-gray-500 hover:text-red-500 transition duration-300" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px]">
            <div className=" flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              <div className=" flex flex-1 cursor-pointer h-full items-center justify-center">
                {" "}
                <IoMdRemove />
              </div>
              <div className=" h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div className="flex flex-1 cursor-pointer h-full items-center justify-center">
                {" "}
                <IoMdAdd />
              </div>
            </div>
            <div className=" flex flex-1 items-center justify-around">
              {price} EGP
            </div>
            <div className=" flex flex-1 justify-end  items-center text-primary font-medium">
              {Number((price * amount).toFixed(2))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
