import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetailPage from "./pages/ProductDetailPage";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import { useContext } from "react";
import CartContext from "./context/CartContext";

function App() {
  const { isCartOpen, cartItems, showModal } = useContext(CartContext);

  return (
    <div className="App">
      <ToastContainer />
      {/* Header will appear on all pages */}
      <Header />

      {/* Conditionally render the Cart */}
      {isCartOpen && <Cart />}

      {/* Conditionally render the OrderConfirmationModal */}
      {showModal && <OrderConfirmationModal />}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        {cartItems.length > 0 ? (
          <Route path="/checkout" element={<Checkout />} />
        ) : (
          <Route path="/checkout" element={<Home />} />
        )}
      </Routes>

      <HeroSection />

      {/*  Footer will appear on all pages*/}
      <Footer />
    </div>
  );
}

export default App;
