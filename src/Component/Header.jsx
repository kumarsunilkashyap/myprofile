import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-600 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Emoney Group</div>
        <div>
          <NavLink
            to="login"
            className="bg-white text-blue-600 px-4 py-2 rounded-md mr-2"
          >
            Login
          </NavLink>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
            Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
