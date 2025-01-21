import { useState, useContext } from "react";
import PropTypes from "prop-types";
import CartContext from "../context/CartContext";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const {
    cartItems,

    handlePayment,
    calculateTotalPrice,
    calculateVat,
    calculateGrandTotalPrice,
  } = useContext(CartContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="w-9/12 mx-auto my-16 flex flex-col gap-10">
        <p>Go Back</p>

        <form onSubmit={handlePayment} className="flex gap-10 justify-between">
          <div className="shadow-lg rounded-xl p-10 bg-white flex flex-col gap-10 w-4/6">
            <h1 className="text-[32px] font-bold">Checkout</h1>
            <div className="flex flex-col gap-20">
              {/* Billing Details */}
              <div className="flex flex-col gap-6">
                <h2 className="text-primary font-bold text-[13px] uppercase">
                  Billing Details
                </h2>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  <label className="flex flex-col gap-2">
                    <p className="font-bold text-[12px]">Name</p>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="h-[56px] shawdow-lg rounded-lg border focus:border-primary focus:outline-none p-3"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <p className="font-bold text-[12px]">Email Address</p>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="h-[56px] shawdow-lg rounded-lg border  focus:border-primary focus:outline-none p-3"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <p className="font-bold text-[12px]">Phone Number</p>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      required
                      className="h-[56px] shawdow-lg rounded-lg border  focus:border-primary focus:outline-none p-3"
                    />
                  </label>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="flex flex-col gap-6">
                <h2 className="text-primary font-bold text-[13px] uppercase">
                  Shipping Info
                </h2>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  <label className="flex flex-col gap-2 col-span-2">
                    <p className="font-bold text-[12px]">Address</p>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      required
                      className="h-[56px] shawdow-lg rounded-lg border  focus:border-primary focus:outline-none p-3"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <p className="font-bold text-[12px]">City</p>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      required
                      className="h-[56px] shawdow-lg rounded-lg border  focus:border-primary focus:outline-none p-3"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <p className="font-bold text-[12px]">ZIP Code</p>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="ZIP Code"
                      required
                      className="h-[56px] shawdow-lg rounded-lg border  focus:border-primary focus:outline-none p-3"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <p className="font-bold text-[12px]">Country</p>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Country"
                      required
                      className="h-[56px] shawdow-lg rounded-lg border  focus:border-primary focus:outline-none p-3"
                    />
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="flex flex-col gap-6">
                <h2 className="text-primary font-bold text-[13px] uppercase">
                  Payment Details
                </h2>

                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  <p className="font-bold text-[12px] row-span-2">
                    Payment Method
                  </p>
                  <label
                    className={`flex items-center gap-2 h-[56px] shawdow-lg rounded-lg border  p-3 ${
                      formData.paymentMethod === "e-money"
                        ? "border-2 border-[#D87D4A]"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="e-money"
                      checked={formData.paymentMethod === "e-money"}
                      onChange={handleInputChange}
                      className="hidden" // Hide default radio
                    />
                    <span
                      className={`w-4 h-4 flex-shrink-0 rounded-full border-4 border-[#e8e6e6] ${
                        formData.paymentMethod === "e-money"
                          ? "bg-[#D87D4A]"
                          : "bg-white"
                      }`}
                    ></span>
                    <p className="font-bold text-[12px]">e-money</p>
                  </label>

                  <label
                    className={`flex items-center gap-2 h-[56px] shadow-lg rounded-lg border  p-3 ${
                      formData.paymentMethod === "cash-on-delivery"
                        ? "border-2 border-[#D87D4A]"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      checked={formData.paymentMethod === "cash-on-delivery"}
                      onChange={handleInputChange}
                      className="hidden" // Hide default radio
                    />
                    <span
                      className={`w-4 h-4 flex-shrink-0 rounded-full border-4 border-[#e8e6e6] ${
                        formData.paymentMethod === "cash-on-delivery"
                          ? "bg-[#D87D4A]"
                          : "bg-white"
                      }`}
                    ></span>
                    <p className="font-bold text-[12px]">Cash on Delivery</p>
                  </label>
                </div>
                {formData.paymentMethod === "e-money" && (
                  <div className="grid grid-cols-2 gap-4">
                    <label>
                      <p className="font-bold text-[12px]">e-Money Number</p>
                      <input
                        type="text"
                        name="eMoneyNumber"
                        value={formData.eMoneyNumber}
                        onChange={handleInputChange}
                        required
                        className="h-[56px] w-full p-2 border rounded-lg focus:border-primary focus:outline-none"
                      />
                    </label>
                    <label>
                      <p className="font-bold text-[12px]">e-Money PIN</p>
                      <input
                        type="password"
                        name="eMoneyPin"
                        value={formData.eMoneyPin}
                        onChange={handleInputChange}
                        required
                        className="h-[56px] w-full p-2 border rounded-md focus:border-primary focus:outline-none"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="shadow-lg rounded-xl p-10 bg-white flex flex-col gap-8 flex-grow self-start">
            <h2 className="text-[18px] font-bold uppercase">Summary</h2>
            {cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex gap-10 justify-between items-center"
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
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <p>X{item.quantity}</p>
                </div>
              );
            })}

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-gray-400 uppercase">Total</p>
                <p>${calculateTotalPrice(cartItems).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 uppercase">Shipping</p>
                <p>$50.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 uppercase">Vat 20% (Included)</p>
                <p>${calculateVat(cartItems).toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 uppercase">Grand Total</p>
                <p>${calculateGrandTotalPrice(cartItems).toFixed(2)}</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 uppercase rounded-md font-bold"
            >
              Continue & Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Checkout.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default Checkout;
