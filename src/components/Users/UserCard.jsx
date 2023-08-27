import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function UserCard() {
  const [showAction, setShowAction] = useState(false);

  const handleToggleAction = () => {
    setShowAction(!showAction);
  };

  return (
    <div className="p-2 border rounded-md hover:border-purple-600 transition-all ease-in hover:shadow-md hover:duration-300 overflow-hidden">
      <div className="flex gap-2 items-center relative">
        <div>
          <img src="./logo192.png" className="h-8 w-8 bg-red rounded-full object-contain" alt="" />
        </div>
        <div>
          <h5 className="text-base font-semibold leading-3">Aakash Macwan</h5>
          <p className="text-[12px] text-gray-400">Web Developer</p>
        </div>
        <div className="ms-auto p-1 bg-gray-100 hover:bg-gray-200 active:bg-gray-500 active:text-white transition-all ease-in rounded-full" onClick={handleToggleAction}>
          <BsThreeDotsVertical />
        </div>
        {showAction && (
          <div className={`z-10 actions absolute w-full top-full right-0 transition-all ease-in animate__animated ${showAction ? "animate__fadeInLeft" : ""}`}>
            <ul className="flex p-1 h-12 bg-white flex-row gap-2">
              <li className="w-full">
                <button className="h-full text-[12px] border rounded-md text-white hover:bg-purple-700 active:shadow-md bg-purple-600 px-3 w-full">View & Edit</button>
              </li>
              <li className="w-full">
                <button className="h-full text-[12px] border rounded-md text-white hover:bg-red-700 active:shadow-md bg-red-600 px-3 w-full">Delete</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={showAction ? "blur-sm " : ""}>
        <div>
          <div>
            <p className="text-[12px] text-gray-400 leading-4 select-none">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
            </p>
          </div>
        </div>
        <div>
          <ul className="flex gap-1 mt-2 overflow-hidden select-none">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <li key={item} className="text-[10px] text-gray-600 bg-gray-200 px-3 rounded-full ">
                CSS
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
