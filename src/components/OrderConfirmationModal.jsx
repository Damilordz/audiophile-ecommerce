import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const OrderConfirmationModal = () => {
  const { handleCloseModal, cartItems, calculateGrandTotalPrice } =
    useContext(CartContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-8 bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-lg"
      >
        {/* Success Icon */}
        <div className="bg-primary w-16 h-16 rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Thank You Message */}
        <h2 className="font-bold text-[32px] uppercase">
          Thank you for your order
        </h2>
        <p className="text-gray-400">
          You will receive an email confirmation shortly.
        </p>
        <div className="rounded-lg flex">
          <div className="w-[60%] bg-[#f1f1f1] p-4 rounded-l-lg flex flex-col justify-center">
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
            <p className="p-2 text-gray-400">
              and {cartItems.length - 1} other item(s)
            </p>
          </div>
          <div className="bg-black text-white p-4 rounded-r-lg flex flex-col justify-center flex-grow">
            <p className="text-gray-400">Grand Total</p>
            <p className="font-bold text-[18px]">
              ${calculateGrandTotalPrice(cartItems)}
            </p>
          </div>
        </div>
        <Link
          onClick={handleCloseModal}
          to="/"
          className="w-full flex justify-center items-center bg-primary text-white py-3 uppercase rounded-md font-bold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
