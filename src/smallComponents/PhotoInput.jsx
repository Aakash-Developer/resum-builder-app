import React, { useState } from "react";
import { TbPhotoEdit } from "react-icons/tb";
import { GrAttachment } from "react-icons/gr";
import {RiDeleteBack2Line} from "react-icons/ri"

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
        <div>
          <div className="h-24 w-24 border rounded-md">
            <img src={selectedFile?.name} alt="" />
          </div>
          <div className="flex gap-1 py-1">
            <label className="bg-gray-100 border-2 border-dashed hover:bg-green-200 hover:border-transparent	transition-all ease-in rounded-md flex items-center justify-center w-full">
              <span className="text-xl   text-gray-500 rounded-md ">
                <GrAttachment className="text-[12px] text-gray-500" />
              </span>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
            <button className="bg-gray-100 border-2 border-dashed hover:bg-red-200 hover:border-transparent	transition-all ease-in rounded-md flex items-center justify-center text-center w-full">
              <RiDeleteBack2Line />
            </button>
          </div>
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
