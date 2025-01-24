import { createContext, useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import cartData from "../data/cartData";
import { getValidCartItems } from "../utils/cartUtils";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState(getValidCartItems);

  const toastDisplayed = useRef(false); // To prevent multiple toasts

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cartItems to localStorage:", error);
    }
  }, [cartItems]);

  const handleCloseModal = () => {
    setShowModal(!showModal);
    setCartItems([]);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (productId, quantity) => {
    const product = cartData.find((item) => item.id === productId);
    if (!product) return;

    const expiresAt = new Date().getTime() + 24 * 60 * 60 * 1000; // Expire in 24 hours

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      let updatedItems;

      if (existingItem) {
        // Update the quantity of the existing item
        updatedItems = prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity, expiresAt }
            : item
        );
        // Show toast for updating quantity
        toast.success(`Updated quantity for ${product.name}`);
      } else {
        // Add the new item to the cart
        updatedItems = [
          ...prevItems,
          {
            id: productId,
            quantity,
            name: product.name,
            image: product.image,
            price: product.price,
            expiresAt,
          },
        ];
        // Show toast for adding a new item
        toast.success(`${product.name} added to cart!`);
      }

      return updatedItems;
    });
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity is 0

      if (!toastDisplayed.current && updatedItems.length < 1) {
        toast.info("All items removed from the cart.");
        toastDisplayed.current = true; // Mark the toast as displayed
        setTimeout(() => (toastDisplayed.current = false), 100); // Reset after a short delay
      }

      return updatedItems;
    });
  };

  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const removeAllItems = () => {
    if (cartItems.length > 0) {
      toast.info("All items removed from the cart.");
      setCartItems([]);
    } else {
      toast.warn("The cart is already empty.");
    }
  };

  // Computed Values with Memoization
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const vat = useMemo(() => {
    return totalPrice * 0.2; // 20% VAT
  }, [totalPrice]);

  const grandTotal = useMemo(() => {
    const shippingFee = 50; // Flat shipping fee
    return totalPrice + vat + shippingFee;
  }, [totalPrice, vat]);

  // Format Currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Handle Payment
  const handlePayment = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        showModal,
        handleCloseModal,
        handleCartClick,
        addToCart,
        cartItems,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        removeAllItems,
        calculateTotalPrice: () => formatCurrency(totalPrice),
        calculateVat: () => formatCurrency(vat),
        calculateGrandTotalPrice: () => formatCurrency(grandTotal),
        handlePayment,
        formatCurrency,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
