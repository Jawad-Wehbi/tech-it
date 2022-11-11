const Input = ({ placeholder = "Placeholder" }) => {
  return (
    <input
      className="[border:1px_solid_#eaeaea] bg-gray-100 relative rounded-[5px] box-border w-[380px] h-[45px] shrink-0 cursor-text"
      type="text"
      placeholder={placeholder}
      required
    />
  );
};

export default Input;
