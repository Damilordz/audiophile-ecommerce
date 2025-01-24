import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function Cart() {
  const {
    handleCartClick,
    cartItems,
    removeAllItems,
    incrementQuantity,
    decrementQuantity,
    calculateTotalPrice,
    formatCurrency,
  } = useContext(CartContext);

  // Disable scroll on background when modal is open
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div
      className="fixed w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center md:justify-end items-start pt-8"
      onClick={handleCartClick}
    >
      <div
        className="flex flex-col gap-10 bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-[377px] md:mr-[8%] max-h-[70vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-[18px] font-bold uppercase">
            Cart ({cartItems.length})
          </h4>
          <p
            className="text-gray-400 cursor-pointer hover:text-primary hover:underline"
            onClick={removeAllItems}
          >
            Remove all
          </p>
        </div>

        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex gap-2 sm:gap-10 justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <div className="h-[64px] w-[64px] rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold uppercase">{item.name}</h4>
                  <p className="font-bold text-gray-500">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 bg-[#ebe8e8] w-[96px] h-[32px]">
                <button
                  className="hover:text-primary"
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  className="hover:text-primary"
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}

        {cartItems.length > 0 ? (
          <>
            <div className="flex gap-10 justify-between items-center">
              <p className="uppercase text-gray-400">Total</p>
              <p className="font-bold">{calculateTotalPrice(cartItems)}</p>
            </div>

            <Link
              to="/checkout"
              onClick={handleCartClick}
              className="bg-primary hover:bg-[#fbaf85] text-white flex justify-center items-center h-[48px] py-2 rounded-lg uppercase font-bold text-[13px]"
            >
              Checkout
            </Link>
          </>
        ) : (
          <p className="text-center text-gray-400">Cart is empty</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
