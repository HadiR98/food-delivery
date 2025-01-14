import React, { useCallback, useState } from "react";
import FormField from "./FormField";

const CheckoutModal = ({ cartData, onClose }) => {
  const [formData, setFormData] = useState({
    order: cartData,
    totalAmount: cartData.reduce(
      (total, item) => total + parseFloat(item.meal.price),
      0
    ),
    fullName: "",
    emailAddress: "",
    street: "",
    postalCode: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    // Add your submit logic here
  };

  const totalAmount = cartData.reduce((total, item) => {
    return total + parseFloat(item.meal.price);
  }, 0);

  return (
    <div className="control fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <dialog
        open
        className=" flex flex-col bg-[#ccc] p-6 rounded-md shadow-lg max-w-2xl w-full"
      >
        <h2 className="text-[#312c1d] text-2xl my-4 font-bold">Checkout</h2>
        <div className="text-[#312c1d] text-base my-4">
          <p>Total Amount: ${totalAmount}</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <FormField
            label="Full Name"
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <FormField
            label="Email Address"
            type="email"
            id="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
          />
          <FormField
            label="Street"
            type="text"
            id="street"
            value={formData.street}
            onChange={handleChange}
          />

          <div className="flex gap-4">
            <FormField
              label="Postal Code"
              type="text"
              id="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
            <FormField
              label="City"
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose}>
              Close
            </button>
            <button
              className=" px-6 py-2 bg-[#facc15] hover:bg-[#f9b511] text-[#1d1a16] rounded-md transition "
              type="submit"
            >
              Submit Order
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CheckoutModal;
