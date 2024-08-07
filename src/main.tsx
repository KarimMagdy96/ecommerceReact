import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ProductProvider } from "./contexts/ProdactContext.tsx";
import SidebarProvider from "./contexts/SlidebarContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </SidebarProvider>
  </React.StrictMode>
);
