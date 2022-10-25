import React from "react";

const Button = ({
  value,
  classes,
  onClick,
  id = "button",
  disabled = false,
}) => {
  return (
    <button
      className={`rounded-xl shadow-xl bg-white text-[#1C2244] font-semibold text-sm lg:text-md py-3 px-10  transition-all  ${classes}`}
      onClick={onClick}
      id={id}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
