import { useState } from "react";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";

function App() {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <>
      <Header cartData={addToCart} setCartData={setAddToCart} />
      <Meals setCart={setAddToCart} />
    </>
  );
}

export default App;
