import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
interface ProductProviderProps {
  children: React.ReactNode;
}

export interface product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
}
interface ProductContextType {
  products: product[];
}

const defaultContextValue: ProductContextType = {
  products: [],
};

export const ProductContext =
  createContext<ProductContextType>(defaultContextValue);

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response: any = await axios.get<product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
