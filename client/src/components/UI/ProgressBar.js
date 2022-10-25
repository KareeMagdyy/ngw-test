import React from "react";

const ProgressBar = ({ value }) => {
  return (
    <div
      style={{ width: `${value}%` }}
      className={` bg-green-600 h-[20px] absolute top-0 left-0 text-black transition-all`}
    >
      {value}%
    </div>
  );
};

export default ProgressBar;
