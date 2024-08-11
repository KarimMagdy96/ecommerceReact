import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SlidebarContext";
import { FaRegUserCircle } from "react-icons/fa";
import { cartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { RiStoreFill } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const { SetIsOpen, isOpen } = useContext(SidebarContext);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
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

        <div className=" flex gap-5">
          <div
            className=" cursor-pointer flex relative   "
            onClick={() => SetIsOpen(!isOpen)}
          >
            <MdOutlineShoppingBag className=" text-2xl " />
            <div className=" bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          <div className="">
            <div className="relative">
              <div
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="inline-flex items-center overflow-hidden rounded-md  "
              >
                <button className="h-full  text-primary hover:bg-gray-50 hover:text-gray-700">
                  <span className="sr-only">Menu</span>
                  <FaRegUserCircle className=" text-2xl " />
                </button>
              </div>

              <div
                className={` ${
                  isLoginOpen ? "hidden" : ""
                } absolute top-11 end-0.5 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg`}
                role="menu"
              >
                <div className="p-2">
                  <Link
                    to={"/sign-in"}
                    className="block rounded-lg px-4 py-2 text-sm text-primary font-semibold hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Login
                  </Link>

                  <Link
                    to={"/sign-up"}
                    className="block rounded-lg px-4 py-2 text-sm text-primary font-semibold hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Register
                  </Link>
                  <div>
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
