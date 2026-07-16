const Button = ({ title, className = "" }) => {
  return (
    <button
      className={`bg-black text-white rounded-md hover:bg-gray-800 transition-colors ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;