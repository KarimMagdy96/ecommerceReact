import { useContext } from "react";
import ProductContext from "../contexts/ProdactContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products, handelfilterProducts, filterProducts, filteractive } =
    useContext(ProductContext);

  const categories = [
    ...new Set([...filterProducts].map((product) => product?.category)),
  ];

  return (
    <>
      <Hero />
      <section className=" py-16">
        <div className=" w-screen flex flex-wrap justify-center items-center gap-x-4 px-2">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              className={`${
                filteractive === category ? "filterbtnActive" : ""
              } capitalize border px-7 py-2 rounded-md  mb-10`}
              onClick={() => handelfilterProducts(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="container mx-auto">
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
