import { useState } from "react";
import MealItem from "./MealItem";
import { useEffect } from "react";

export default function Meals({ setCart }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fechMeals() {
      setLoading(true);
      try {
        const meals = await fetch("http://localhost:3000/meals");
        const mealsData = await meals.json();
        setMeals(mealsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fechMeals();
  }, []);
  function handleAddToCart(meal) {
    setCart((prevData) => [...prevData, { meal }]);
  }

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  return (
    <div id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} cartHandler={handleAddToCart} />
      ))}
    </div>
  );
}
