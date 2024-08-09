import React, { createContext, ReactNode, useState } from "react";
import { product } from "./ProdactContext";
interface addToCartType {
  addToCart: (product: product, id: number) => void;
  cart: product[];
  removeCartItem: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
}
const cartDefaultValue: addToCartType = {
  addToCart: () => {},
  cart: [],
  removeCartItem: () => {},
  clearCart: () => {},
  increaseAmount: () => {},
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
  const removeCartItem = (id: number) => {
    const newCart = cart.filter((item: any) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const increaseAmount = (id: number) => {
    const CartItem: any = cart.find((item: any) => item.id === id);
    addToCart(CartItem, id);
  };
  return (
    <cartContext.Provider
      value={{ cart, addToCart, removeCartItem, clearCart, increaseAmount }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
