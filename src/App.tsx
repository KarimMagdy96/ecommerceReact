import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Slidebar from "./components/Slidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import { useAuth } from "@clerk/clerk-react";
import Checkout from "./components/Checkout";

function App() {
  const { isSignedIn } = useAuth();
  return (
    <>
      <div className=" overflow-hidden">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/Checkout"
              element={isSignedIn ? <Checkout /> : <Navigate to="/sign-in" />}
            />
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
