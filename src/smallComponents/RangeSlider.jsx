// RangeSlider.js
import React from "react";

const RangeSlider = ({ min, max, value, onChange }) => {
  return (
    <div className="relative w-full">
      <input type="range" min={min} max={max} value={value} onChange={onChange} className="range-slider" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-300 rounded"></div>
      <div className="absolute top-0 left-0 w-1 h-6 bg-gray-300"></div>
      <div className="absolute top-0 right-0 w-1 h-6 bg-gray-300"></div>
      <div
        className="absolute top-0"
        style={{
          left: `${((value - min) / (max - min)) * 100}%`,
          transform: "translateX(-50%)",
        }}>
        <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default RangeSlider;
