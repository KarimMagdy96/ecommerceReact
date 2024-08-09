import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SlidebarContext";
import { BsCart } from "react-icons/bs";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { RiStoreFill } from "react-icons/ri";

const Header = () => {
  const { SetIsOpen, isOpen } = useContext(SidebarContext);
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(cartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"
      } fixed w-full z-10 transition-all duration-300`}
    >
      <div className=" flex container mx-auto items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <RiStoreFill className=" text-[40px]" />
          </div>
        </Link>
        <div
          className=" cursor-pointer flex relative "
          onClick={() => SetIsOpen(!isOpen)}
        >
          <BsCart className=" text-2xl " />
          <div className=" bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
