import React from "react";

const CustomButton = ({ type, label, onClick, customClass }) => {
  return (
    <button type={type} onClick={onClick} className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer ${customClass}`}>
      {label}
    </button>
  );
};

export default CustomButton;
