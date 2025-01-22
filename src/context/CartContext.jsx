import { createContext, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import cartData from "../data/cartData";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:", error);
      return []; // Fallback to an empty cart if there's an error
    }
  });

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

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem && !toastDisplayed.current) {
        toast.success(`Updated quantity for ${product.name}`);
        toastDisplayed.current = true;
        setTimeout(() => (toastDisplayed.current = false), 3000); // Reset after 3 seconds
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else if (!toastDisplayed.current) {
        toast.success(`${product.name} added to cart!`);
        toastDisplayed.current = true;
        setTimeout(() => (toastDisplayed.current = false), 3000); // Reset after 3 seconds
        return [
          ...prevItems,
          {
            id: productId,
            quantity,
            name: product.name,
            image: product.image,
            price: product.price,
          },
        ];
      }
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
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const removeAllItems = () => {
    if (cartItems.length > 0) {
      toast.info("All items removed from the cart.");
    } else {
      toast.warn("The cart is already empty.");
    }
    setCartItems([]);
  };

  // Utility function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Calculate Total Price
  const calculateTotalPrice = (cartItems) => {
    const total = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
    return formatCurrency(total); // Format the total price as currency
  };

  // Calculate VAT (20% of Total Price)
  const calculateVat = (cartItems) => {
    const vat =
      cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
      }, 0) * 0.2;
    return formatCurrency(vat); // Format VAT as currency
  };

  // Calculate Grand Total (Total Price + VAT + Flat Shipping Fee)
  const calculateGrandTotalPrice = (cartItems) => {
    const shippingFee = 50; // Flat shipping fee
    const total = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity;
    }, 0);
    const grandTotal = total + total * 0.2 + shippingFee;
    return formatCurrency(grandTotal); // Format grand total as currency
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
        calculateTotalPrice,
        calculateVat,
        calculateGrandTotalPrice,
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
