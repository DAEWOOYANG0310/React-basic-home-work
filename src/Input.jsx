function Input({ value, onChange, id, type, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
