import React, { createContext, ReactNode, useState } from "react";
import { product } from "./ProdactContext";
import CartItem from "./../components/CartItem";
interface addToCartType {
  addToCart: (product: product, id: number) => void;
  cart: product[];
}
const cartDefaultValue: addToCartType = {
  addToCart: () => {},
  cart: [],
};
interface CartProviderProps {
  children: ReactNode;
}
export const cartContext = createContext<addToCartType>(cartDefaultValue);
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<[] | any>([]);

  const addToCart = (product: product, id: number) => {
    const newItem = { ...product, amount: 1 };

    const CartItem: any = cart.find((item: any) => item.id === id);
    if (CartItem) {
      const newCart: any = [...cart].map((item: any) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  console.log(cart);
  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
