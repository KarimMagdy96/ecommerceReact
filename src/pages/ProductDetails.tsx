import { useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "./../contexts/CartContext";
import { ProductContext } from "../contexts/ProdactContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(cartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id || "0");
  });
  if (!product)
    return (
      <section className=" h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  const { title, price, description, image } = product;

  return (
    <section className=" pt-32 mt-3 pb-12 lg:py-32 h-screen flex items-center justify-center">
      <div className="container max-auto">
        <div className=" flex gap-x-16 gap-y-3 flex-col lg:flex-row items-center justify-center">
          <div className=" border p-4">
            <img
              className=" max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div className=" p-1  text-center lg:text-left lg:w-1/2 ">
            <h1 className=" text-[26px] font-medium mb-2  ">{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              {price} EGP
            </div>
            <p className=" mb-8 ">{description}</p>
            <button
              onClick={() => addToCart(product, parseInt(id || "0"))}
              className=" bg-primary py-4 px-8 text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
