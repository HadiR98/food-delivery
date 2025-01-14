export default function CheckoutResultModal({ onClick }) {
  return (
    <div>
      <h2 className="text-[#312c1d] text-2xl my-4 font-bold">Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="flex justify-end mt-4">
        <button
          className="px-6 py-2 bg-[#facc15] hover:bg-[#f9b511] text-[#1d1a16] rounded-md transition"
          onClick={onClick}
        >
          Okey
        </button>
      </div>
    </div>
  );
}
