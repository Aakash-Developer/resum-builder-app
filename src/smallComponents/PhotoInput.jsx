import React, { useState } from "react";
import { TbPhotoEdit } from "react-icons/tb";

const PhotoInput = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (onChange) {
      onChange(file);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      {selectedFile !== null ? (
        <div className="h-24 w-24 border rounded-md">
          <img src={selectedFile?.name} alt="" />
        </div>
      ) : (
        <label className="cursor-pointer rounded-md h-24 w-24 flex justify-center items-center p-1 px-3 border-2 border-dashed  bg-gray-100 hover:bg-gray-200">
          <span className="text-xl   text-gray-500 rounded-md ">
            <TbPhotoEdit />
          </span>
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
        </label>
      )}
    </div>
  );
};

export default PhotoInput;
