import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-purple-800">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between p-2 flex-row items-center md:flex-row">
        <NavLink to="/" className="flex flex-row title-font  items-center ">
          <span className=" text-white text-2xl font-bold">Resume Builder</span>
        </NavLink>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base " onClick={() => navigate("create-new")}>
          Create New
        </button>
      </div>
    </header>
  );
}
