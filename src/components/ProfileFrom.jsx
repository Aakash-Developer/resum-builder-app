import React, { useState } from "react";
import InputField from "../smallComponents/InputField";
import PhotoInput from "../smallComponents/PhotoInput";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    email: "",
    phoneNumber: "",
    address: "",
    description: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    city: "",
    state: "",
    pincode: "",
    linkedinUrl: "",
    githubUrl: "",
    portfolioUrl: "",
  });

  const [formValidity, setFormValidity] = useState({
    fullName: false,
    position: false,
    email: false,
    phoneNumber: false,
    address: false,
    gender: true, // Optional field, assumed to be valid
    nationality: true, // Optional field, assumed to be valid
    description: true, // Optional field, assumed to be valid
    dateOfBirth: true, // Optional field, assumed to be valid
    city: true, // Optional field, assumed to be valid
    state: true, // Optional field, assumed to be valid
    pincode: true, // Optional field, assumed to be valid
    linkedinUrl: true, // Optional field, assumed to be valid
    githubUrl: true, // Optional field, assumed to be valid
    portfolioUrl: true, // Optional field, assumed to be valid
  });

  const handleFieldChange = (fieldName, fieldValue, isValid) => {
    console.log(fieldName, fieldValue, isValid);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: fieldValue,
    }));

    setFormValidity((prevFormValidity) => ({
      ...prevFormValidity,
      [fieldName]: isValid,
    }));
  };

  const isFormValid = () => {
    return Object.values(formValidity).every((isValid) => isValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      // Handle form submission
      console.log("Form submitted with data:", formData);
    } else {
      console.log("Form data is not valid.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-8">
      <div className="p-3 border rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="flex md:items-center gap-0 flex-col md:flex-row md:gap-3">
            <div className="">
              <PhotoInput />
            </div>
            <div className="w-full">
              <div className="w-full ">
                <InputField type="text" name="position" placeholder="Position" value={formData.position} changeHandler={handleFieldChange} />
              </div>
              <div className="w-full ">
                <InputField type="text" name="fullName" placeholder="Full Name" value={formData.fullName} changeHandler={handleFieldChange} />
              </div>
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-1/2">
              <InputField type="email" name="email" placeholder="Email" value={formData.email} changeHandler={handleFieldChange} />
            </div>
            <div className="w-full md:w-1/2">
              <InputField type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} changeHandler={handleFieldChange} />
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-1/2">
              <InputField type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} changeHandler={handleFieldChange} />
            </div>
            <div className="w-full md:w-1/2">
              <InputField type="text" name="city" placeholder="City" value={formData.city} changeHandler={handleFieldChange} />
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-1/2">
              <InputField type="text" name="state" placeholder="State" value={formData.state} changeHandler={handleFieldChange} />
            </div>
            <div className="w-full md:w-1/2">
              <InputField type="text" name="pincode" placeholder="Pincode" value={formData.pincode} changeHandler={handleFieldChange} />
            </div>
          </div>

          <div className="flex gap-0 flex-col md:flex-row md:gap-3">
            <div className="w-full md:w-1/2">
              <InputField type="text" name="gender" placeholder="Gender" value={formData.gender} changeHandler={handleFieldChange} />
            </div>
            <div className="w-full md:w-1/2">
              <InputField type="text" name="nationality" placeholder="Nationality" value={formData.nationality} changeHandler={handleFieldChange} />
            </div>
          </div>

          <InputField type="text" name="address" placeholder="address" value={formData.address} changeHandler={handleFieldChange} />
          <InputField type="text" name="description" placeholder="Describe yourself in one line" value={formData.description} changeHandler={handleFieldChange} />
          <InputField type="url" name="linkedinUrl" placeholder="LinkedIn URL" value={formData.linkedinUrl} changeHandler={handleFieldChange} />
          <InputField type="url" name="githubUrl" placeholder="GitHub URL" value={formData.githubUrl} changeHandler={handleFieldChange} />
          <InputField type="url" name="portfolioUrl" placeholder="Portfolio URL" value={formData.portfolioUrl} changeHandler={handleFieldChange} />
          <button type="submit" className={`mt-4 p-2 px-4 bg-blue-500 text-white rounded ${isFormValid() ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`} disabled={!isFormValid()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
