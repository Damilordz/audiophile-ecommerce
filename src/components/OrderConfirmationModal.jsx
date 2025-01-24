import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const OrderConfirmationModal = () => {
  const {
    handleCloseModal,
    cartItems,
    calculateGrandTotalPrice,
    formatCurrency,
  } = useContext(CartContext);

  const [isExpanded, setIsExpanded] = useState(false);

  // Disable scroll on background when modal is open
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-8 bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-lg max-h-[90vh] overflow-y-auto"
      >
        {/* Success Icon */}
        <div className="bg-primary w-16 h-16 rounded-full flex justify-center items-center">
          <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#D87D4A" cx="32" cy="32" r="32" />
              <path
                stroke="#FFF"
                strokeWidth="4"
                d="m20.754 33.333 6.751 6.751 15.804-15.803"
              />
            </g>
          </svg>
        </div>

        {/* Thank You Message */}
        <h2 className="font-semibold text-[24px] sm:text-[32px] uppercase">
          Thank you for your order
        </h2>
        <p className="text-gray-400">
          You will receive an email confirmation shortly.
        </p>
        <div className="rounded-lg flex flex-col sm:flex-row">
          <div className="sm:w-[60%] bg-[#f1f1f1] sm:p-4 rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex flex-col justify-center">
            {isExpanded ? (
              cartItems.map((item) => (
                <>
                  <div className="flex justify-between gap-4 items-center p-2 border-b">
                    <div className="flex gap-2 ">
                      <img
                        src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                        alt=""
                        className="h-[50px] w-[50px] object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-400">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                    </div>
                    <p>X{item.quantity}</p>
                  </div>
                </>
              ))
            ) : (
              <>
                <div className="flex justify-between gap-4 items-center p-2 border-b">
                  <div className="flex gap-2 ">
                    <img
                      src="/assets/cart/image-xx99-mark-two-headphones.jpg"
                      alt=""
                      className="h-[50px] w-[50px] object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-bold">{cartItems[0].name}</p>
                      <p className="text-gray-400">${cartItems[0].price}</p>
                    </div>
                  </div>
                  <p>X{cartItems[0].quantity}</p>
                </div>
              </>
            )}
            {cartItems.length > 1 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 text-gray-500 text-[12px] text-center font-bold hover:text-primary"
              >
                {isExpanded
                  ? "View less"
                  : `and ${cartItems.length - 1} other item(s)`}
              </button>
            )}
          </div>
          <div className="bg-black text-white p-4 rounded-b-lg md:rounded-bl-none md:rounded-r-lg flex flex-col justify-center flex-grow gap-2">
            <p className="text-gray-400">Grand Total</p>
            <p className="font-bold text-[18px]">
              {calculateGrandTotalPrice(cartItems)}
            </p>
          </div>
        </div>
        <Link
          onClick={handleCloseModal}
          to="/"
          className="w-full flex justify-center items-center bg-primary hover:bg-[#fbaf85] text-white py-3 uppercase rounded-md font-bold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
