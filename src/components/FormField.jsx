export default function FormField({ label, type, id, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        required
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
