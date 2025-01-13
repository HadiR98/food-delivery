import logoImg from "../assets/logo.jpg";
import React, { useState } from "react";
import CartModal from "./CartModal";
export default function Header({ cartData }) {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseModal = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <CartModal items={cartData} onClose={handleCloseModal} />}
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
