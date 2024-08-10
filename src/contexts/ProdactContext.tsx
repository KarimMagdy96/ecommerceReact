import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface ProductProviderProps {
  children: React.ReactNode;
}

export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
}
interface ProductContextType {
  products: product[];
  handelfilterProducts: (category: string) => void;
}

const defaultContextValue: ProductContextType = {
  products: [],
  handelfilterProducts: () => {},
};

export const ProductContext =
  createContext<ProductContextType>(defaultContextValue);

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<product[]>([]);
  const [filterProducts, setFilterProducts] = useState<product[]>([]);

  const getProducts = async () => {
    try {
      const response: any = await axios.get<product[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
      setFilterProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handelfilterProducts = (category: string) => {
    if (category === "all") {
      setProducts(filterProducts);
      return;
    }
    const newProducts = filterProducts.filter((product) => {
      return product.category === category;
    });
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{ products, handelfilterProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
