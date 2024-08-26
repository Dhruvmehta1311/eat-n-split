import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 rounded w-full sm:w-40 font-semibold  py-2 text-lg"
    >
      {children}
    </button>
  );
};

export default Button;
