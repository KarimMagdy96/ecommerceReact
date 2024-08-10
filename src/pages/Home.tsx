import { useContext } from "react";
import ProductContext from "../contexts/ProdactContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products, handelfilterProducts } = useContext(ProductContext);

  return (
    <>
      <Hero />
      <section className=" py-16">
        <div className="container mx-auto">
          <div className=" flex gap-7 mb-5">
            <button
              className=" capitalize border rounded-lg py-2 px-4"
              onClick={() => handelfilterProducts("all")}
            >
              All
            </button>
            <button
              className=" capitalize border rounded-lg py-2 px-4"
              onClick={() => handelfilterProducts("jewelery")}
            >
              jewelery
            </button>
            <button
              className=" capitalize border rounded-lg py-2 px-4"
              onClick={() => handelfilterProducts("men's clothing")}
            >
              men's clothing
            </button>
            <button
              className=" capitalize border rounded-lg py-2 px-4"
              onClick={() => handelfilterProducts("electronics")}
            >
              electronics
            </button>
            <button
              className=" capitalize border rounded-lg py-2 px-4"
              onClick={() => handelfilterProducts("women's clothing")}
            >
              women's clothing
            </button>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
             gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-1
            "
          >
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
