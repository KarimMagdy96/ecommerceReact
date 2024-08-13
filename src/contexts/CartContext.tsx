import React, { createContext, ReactNode, useEffect, useState } from "react";
import { product } from "./ProdactContext";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface addToCartType {
  addToCart: (product: product, id: number) => void;
  cart: product[];
  removeCartItem: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  itemAmount: number;
  total: number;
}
const cartDefaultValue: addToCartType = {
  addToCart: () => {},
  cart: [],
  removeCartItem: () => {},
  clearCart: () => {},
  increaseAmount: () => {},
  decreaseAmount: () => {},
  itemAmount: 0,
  total: 0,
};
interface CartProviderProps {
  children: ReactNode;
}
export const cartContext = createContext<addToCartType>(cartDefaultValue);
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<[] | any>([]);
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const { isSignedIn } = useAuth();
  useEffect(() => {
    const getCart = () => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        setCart(JSON.parse(cart));
      }
    };
    isSignedIn && getCart();
  }, [isSignedIn]);
  useEffect(() => {
    const total = cart.reduce((accumulator: any, currentValue: any) => {
      return accumulator + currentValue.price * currentValue.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product: product, id: number) => {
    const notify = () => toast("Please sign in");
    !isSignedIn && notify();
    const newItem = { ...product, amount: 1 };

    const CartItem: any = cart.find((item: any) => item.id === id);

    if (CartItem && isSignedIn) {
      const newCart: any = [...cart].map((item: any) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      isSignedIn && setCart([...cart, newItem]);
      isSignedIn &&
        localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
    }
  };

  const removeCartItem = (id: number) => {
    const newCart = cart.filter((item: any) => {
      return item.id !== id;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const increaseAmount = (id: number) => {
    const CartItem: any = cart.find((item: any) => item.id === id);
    addToCart(CartItem, id);
  };
  const decreaseAmount = (id: number) => {
    const CartItem: any = cart.find((item: any) => item.id === id);
    if (CartItem) {
      const newCart: any = cart.map((item: any) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    if (CartItem.amount < 2) {
      removeCartItem(id);
    }
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeCartItem,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
