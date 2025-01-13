import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function CartModal({ items, onClose }) {
  // پردازش اولیه برای تنظیم مقدار quantity
  const initializeCartItems = (cartItems) => {
    if (!cartItems || cartItems.length === 0) return [];
    const counts = cartItems.reduce((acc, item) => {
      const id = item.meal.id;
      if (!acc[id]) {
        acc[id] = { ...item.meal, quantity: 0 };
      }
      acc[id].quantity += 1;
      return acc;
    }, {});
    return Object.values(counts);
  };

  const [cartItems, setCartItems] = useState([]);

  // مقداردهی اولیه هنگام دریافت داده‌ها
  useEffect(() => {
    if (items && items.length > 0) {
      setCartItems(initializeCartItems(items));
    }
  }, [items]);

  console.log(cartItems);

  // افزایش تعداد
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // کاهش تعداد
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // محاسبه مبلغ کل
  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <dialog
        open
        className="flex flex-col bg-white p-6 rounded-md shadow-lg max-w-2xl w-full"
      >
        <h2 className="text-[#312c1d] text-2xl my-4 font-bold">Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="flex justify-between mb-4 items-center">
                <div className="flex gap-2">
                  <h3>
                    {item.name} - {item.quantity} x
                  </h3>
                  <div className="price">
                    ${parseFloat(item.price).toFixed(2)}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="w-6 px-2 text-center text-[#facc15] text-lg bg-[#312c1d] rounded-full"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="w-6 px-2 text-center text-[#facc15] text-lg bg-[#312c1d] rounded-full"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="cart-modal-actions">
          <div className="modal-actions">
            <button onClick={onClose}>Close</button>
            <button
              className="px-6 py-2 bg-[#facc15] hover:bg-[#f9b511] text-[#1d1a16] rounded-md transition "
              onClick={() => alert("Proceeding to checkout...")}
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </dialog>
    </div>,
    document.getElementById("modal")
  );
}
