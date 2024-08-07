import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SlidebarContext";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const { SetIsOpen, isOpen } = useContext(SidebarContext);
  return (
    <header className=" bg-pink-400">
      <div>Header</div>
      <div
        className=" cursor-pointer flex relative"
        onClick={() => SetIsOpen(!isOpen)}
      >
        <BsCart className=" text-2xl" />{" "}
      </div>
    </header>
  );
};

export default Header;
