import logoImg from "../assets/logo.jpg";
import React, { useState } from "react";
import CartModal from "./CartModal.jsx";
import CheckoutModal from "./CheckoutModal.jsx";

export default function Header({ cartData, setCartData, resetCart }) {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseModal = () => {
    setShowCart(false);
    setShowCheckout(false);
  };
  const handleOnClickCheckuot = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleOnClickOkey = () => {
    setShowCheckout(false);
    resetCart();
  };

  return (
    <>
      {showCart && (
        <CartModal
          items={cartData}
          setItems={setCartData}
          onClose={handleCloseModal}
          onChekout={handleOnClickCheckuot}
        />
      )}
      {showCheckout && (
        <CheckoutModal
          cartData={cartData}
          onClose={handleCloseModal}
          onResetCart={handleOnClickOkey}
        />
      )}
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="A restaurant" />
          <h1>ReactFood</h1>
        </div>
        <nav>
          <button onClick={handleCartClick}>Cart ({cartData.length})</button>
        </nav>
      </header>
    </>
  );
}
// console.log(cartData);
//   return (
//     <header id="main-header">
//       <div id="title">
//         <img src={logoImg} alt="A restaurant" />
//         <h1>ReactFood</h1>
//       </div>
//       <nav>
//         <button>Cart ({cartData.length})</button>
//       </nav>
//     </header>
//   );
// }
