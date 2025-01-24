import { StrictMode } from "react";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NavLinkProvider } from "./context/NavLinkContext";
import { CartProvider } from "./context/CartContext";
import { MenuProvider } from "./context/MenuContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavLinkProvider>
        <CartProvider>
          <MenuProvider>
            <ScrollToTop />
            <App />
          </MenuProvider>
        </CartProvider>
      </NavLinkProvider>
    </BrowserRouter>
  </StrictMode>
);