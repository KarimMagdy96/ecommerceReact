import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ProductProvider } from "./contexts/ProdactContext.tsx";
import SidebarProvider from "./contexts/SlidebarContext.tsx";
import CartProvider from "./contexts/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);
