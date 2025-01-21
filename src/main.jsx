import { StrictMode } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NavLinkProvider } from "./context/NavLinkContext";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <NavLinkProvider>
          <ScrollToTop />
          <App />
        </NavLinkProvider>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
