import React from "react";
import img from "../img/hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" bg-hero h-[800px] bg-cover bg-no-repeat bg-center py-24">
      <div className="container  mx-auto flex justify-start  h-full">
        <div className=" ms-1 md:ms-20  flex justify-center items-center ">
          <div className=" font-bold text-[3.8rem] md:text-[4.8rem]  text-slate-800">
            <div className=" flex justify-start items-center">
              <div className="w-10 h-[2px] bg-red-800"></div>
              <div className=" text-sm text-gray-700  ms-2 leading-6 font-semibold ">
                Best Products
              </div>
            </div>
            <div className=" text-pink-900">Smart</div>
            <div>Comfort & </div>
            <div className="text-pink-900">Affordable</div>
            <div className="  flex justify-start gap-4">
              <div className=" hover:bg-transparent hover:text-gray-950 transition-all duration-300 cursor-pointer hover:border-black border bg-pink-900 text-white text-sm px-4 py-4 rounded-md mt-4 text-center">
                <button>Discover Our Collection</button>
              </div>
              <div className=" bg-transparent border  border-gray-800 border-2 text-gray-950 text-white text-sm px-4 py-4 rounded-md mt-4 text-center">
                <button>Find More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
