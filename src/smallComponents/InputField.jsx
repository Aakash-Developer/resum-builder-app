import React, { useState } from "react";

const InputField = ({ type, name, placeholder, customClass, value, changeHandler }) => {
  const [error, setError] = useState("");

  const validateInput = (inputValue) => {
    let errorMessage = "";

    if (type === "number") {
      if (!/^\d+$/.test(inputValue)) {
        errorMessage = "Please enter a valid number.";
      } else if (inputValue.length > 10 || inputValue.length === 0) {
        errorMessage = "Number must be between 1 and 10 digits.";
      }
    } else if (type === "tel") {
      if (!/^(?:\d{0,10})?$/.test(inputValue)) {
        errorMessage = "Please enter a valid phone number (0-10 digits).";
      }
    } else if (type === "email" && !/\S+@\S+\.\S+/.test(inputValue)) {
      errorMessage = "Please enter a valid email address.";
    }

    setError(errorMessage);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    validateInput(inputValue);

    if (changeHandler) {
      changeHandler(name, inputValue, error === "");
    }
  };

  return (
    <div className={`input-container ${customClass}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={` w-full my-2  focus:outline-none focus:border-b-[1px]	 focus:border-blue-300 bg-gray-100 p-2 rounded-sm ${error ? "border-red-500" : "border-gray-300"} ${customClass}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
