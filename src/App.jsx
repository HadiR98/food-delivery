import { useState } from "react";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";

function App() {
  const [addToCart, setAddToCart] = useState([]);

  function handleResetCart() {
    setAddToCart([]);
  }

  return (
    <>
      <Header
        cartData={addToCart}
        setCartData={setAddToCart}
        resetCart={handleResetCart}
      />
      <Meals setCart={setAddToCart} />
    </>
  );
}

export default App;
