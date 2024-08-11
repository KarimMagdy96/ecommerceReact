import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Slidebar from "./components/Slidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
          <Slidebar />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
