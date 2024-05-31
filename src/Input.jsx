const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="할 일을 추가하세요"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
