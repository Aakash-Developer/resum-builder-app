import React, { useState } from "react";
import InputField from "../smallComponents/InputField";

const EmploymentForm = () => {
  const initialFormData = {
    position: "",
    employer: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showEndDate, setShowEndDate] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (name, value, isValid) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setIsFormValid(isValid);
  };

  const handleShowEndDateChange = () => {
    setShowEndDate(!showEndDate);
    if (!showEndDate) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        endDate: "", // Reset end date when hiding
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission or validation here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="p-3 border rounded-md">
        <form onSubmit={handleSubmit}>
          <div>
            <InputField type="text" name="position" placeholder="Position" value={formData.position} changeHandler={handleInputChange} />
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-1/2">
              <InputField type="text" name="employer" placeholder="Employer" value={formData.employer} changeHandler={handleInputChange} />
            </div>
            <div className="w-full md:w-1/2">
              <InputField type="text" name="city" placeholder="City" value={formData.city} changeHandler={handleInputChange} />
            </div>
          </div>

          <div className="flex items-center py-3">
            <input type="checkbox" id="showEndDate2" name="showEndDate" checked={showEndDate} onChange={handleShowEndDateChange} className="mr-2" />
            <label htmlFor="showEndDate2">Show End Date</label>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-1/2">
              <InputField type="month" name="startDate" placeholder="Start Date" value={formData.startDate} changeHandler={handleInputChange} />
            </div>
            <div className="w-full md:w-1/2">
              <InputField
                type="month"
                name="endDate"
                placeholder="End Date"
                value={formData.endDate}
                changeHandler={handleInputChange}
                customClass={` ${showEndDate ? "" : "opacity-50 pointer-events-none"}`}
              />
            </div>
          </div>

          <InputField type="text" name="description" placeholder="Description" value={formData.description} changeHandler={handleInputChange} />
          <button type="submit" className={`px-4 py-2 bg-blue-500 text-white rounded-md ${isFormValid ? "hover:bg-blue-600 cursor-pointer" : "cursor-not-allowed opacity-50"}`} disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;
