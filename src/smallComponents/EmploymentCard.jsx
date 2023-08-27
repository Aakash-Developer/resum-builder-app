// EmploymentCard.js
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
// {
//   employment, onDelete, onEdit;
// }
const EmploymentCard = () => {
  const employment = {
    position: "Web Developer",
    employer: "TCS",
    city: "ANAND",
    startYear: "2023",
    startMonth: "08",
    endYear: "2040",
    endMonth: "08",
    description: "uewifhiwc ewfihwc wmcew8chwe cewofewf wefiewhf wefewhf ewfewfe fewfew fwefewf wf8wfw fwfw fewfhew fwefw ",
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{employment.position}</h2>
        <div className="flex items-center space-x-2">
          <button className="text-purple-600 hover:text-purple-800">
            <FaEdit />
          </button>
          <button className="text-red-600 hover:text-red-800">
            <FaTrash />
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{employment.employer}</p>
      <p className="text-gray-600 mb-2">
        {employment.city}, {employment.startYear}-{employment.startMonth} to {employment.endYear}-{employment.endMonth}
      </p>
      <p className="text-gray-800">{employment.description}</p>
    </div>
  );
};

export default EmploymentCard;
