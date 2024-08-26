import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-orange-500 rounded w-full sm:w-40 font-semibold  py-3 text-lg">
      {children}
    </button>
  );
};

export default Button;
