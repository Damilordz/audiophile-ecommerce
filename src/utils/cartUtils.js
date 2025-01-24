// cartUtils.js
export const getValidCartItems = () => {
  try {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      const now = new Date().getTime();
      // Remove expired items
      const validCart = parsedCart.filter((item) => item.expiresAt > now);
      if (validCart.length !== parsedCart.length) {
        localStorage.setItem("cartItems", JSON.stringify(validCart));
      }
      return validCart;
    }
    return [];
  } catch (error) {
    console.error("Error accessing cartItems in localStorage:", error);
    return [];
  }
};
