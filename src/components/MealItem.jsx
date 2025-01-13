export default function MealItem({ meal, cartHandler }) {
  return (
    <div className="max-w-xs bg-[#2c2c2c] rounded-lg overflow-hidden shadow-md text-white flex flex-col justify-between">
      <img
        src={`http://localhost:3000/${meal.image}`}
        alt={meal.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">{meal.name}</h3>
        <p className="text-[#facc15] text-xl font-semibold mb-4">
          ${meal.price}
        </p>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {meal.description}
        </p>
        <button
          className="w-full py-2 bg-[#facc15] hover:bg-[#f9b511] text-[#1d1a16] rounded-md transition mt-auto"
          onClick={() => cartHandler(meal)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}