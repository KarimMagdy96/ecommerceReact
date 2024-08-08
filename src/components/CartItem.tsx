import React from "react";
import { product } from "./../contexts/ProdactContext";
import { Link } from "react-router-dom";
interface AppProps {
  item: product;
}
const CartItem: React.FC<AppProps> = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className=" flex">
      <div className="w-full min-h-[150px]  gap-x-4 flex items-center">
        <Link to={`/product/${id}`}>
          <img className=" max-w-[80px]" src={image} alt={title} />
        </Link>
        <div>
          <Link to={`/product/${id}`}>{title}</Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
