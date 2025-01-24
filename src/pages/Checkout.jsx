import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import NavLinkContext from "../context/NavLinkContext";

function Checkout() {
  const [touched, setTouched] = useState(false);
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
    formatCurrency,
  } = useContext(CartContext);
  const { activeLink } = useContext(NavLinkContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmailBlur = () => setTouched(true);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const validateEmail = (email) => emailRegex.test(email);
  const isValid = validateEmail(formData.email);

  return (
    <div>
      <div className="w-10/12 mx-auto my-16 flex flex-col gap-10">
        <Link to={`/${activeLink}`} className="text-[#a09e9e] hover:text-primary">
          Go Back
        </Link>

        <form
          onSubmit={handlePayment}
          className="flex flex-col lg:flex-row gap-10 justify-between"
        >
          <div className="shadow-lg rounded-xl p-6 sm:p-12 bg-white flex flex-col gap-10 lg:w-4/6">
            <h1 className="text-[32px] font-bold">Checkout</h1>
            <div className="flex flex-col gap-10 lg:gap-20">
              {/* Billing Details */}
              <div className="flex flex-col gap-6">
                <h2 className="text-primary font-bold text-[13px] uppercase">
                  Billing Details
                </h2>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
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
                    <div className="flex justify-between">
                      <p
                        className={`font-bold text-[12px] ${
                          touched && !isValid && "text-[#cd2c2c]"
                        }`}
                      >
                        Email Address
                      </p>
                      {touched && !isValid && (
                        <p className="text-[#cd2c2c] text-[12px]">
                          Wrong format
                        </p>
                      )}
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleEmailBlur}
                      placeholder="Email"
                      required
                      className={`h-[56px] shawdow-lg rounded-lg border  focus:border-primary focus:outline-none p-3 ${
                        touched && !isValid && "border-2 border-red-500"
                      }`}
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
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                  <label className="flex flex-col gap-2 sm:col-span-2">
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

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                  <p className="font-bold text-[12px] row-span-2">
                    Payment Method
                  </p>
                  <label
                    className={`flex items-center gap-2 h-[56px] shawdow-lg rounded-lg border-2 hover:border-primary p-3 ${
                      formData.paymentMethod === "e-money"
                        ? "border border-[#D87D4A]"
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
                    className={`flex items-center gap-2 h-[56px] shadow-lg rounded-lg border hover:border-primary  p-3 ${
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
                {formData.paymentMethod === "e-money" ? (
                  <div className="grid sm:grid-cols-2 gap-4">
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
                ) : (
                  <div className="flex flex-col items-center sm:flex-row gap-6">
                    <div>
                      <svg
                        width="48"
                        height="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                          fill="#D87D4A"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-400">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-0 shadow-lg rounded-xl p-6 sm:p-10 bg-white flex flex-col gap-8 flex-grow self-start">
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
                        {formatCurrency(item.price * item.quantity)}
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
                <p className="font-bold">{calculateTotalPrice(cartItems)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 uppercase">Shipping</p>
                <p className="font-bold">$50.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 uppercase">Vat 20% (Included)</p>
                <p className="font-bold">{calculateVat(cartItems)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-400 uppercase">Grand Total</p>
                <p className="text-primary font-bold">
                  {calculateGrandTotalPrice(cartItems)}
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-[#fbaf85] text-white py-3 uppercase font-bold"
            >
              Continue & Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
