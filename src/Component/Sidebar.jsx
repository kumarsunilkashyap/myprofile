import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-48 bg-gray-600 text-white h-full p-4 z-10">
      <nav className="flex flex-col space-y-4">
        <NavLink to="dashboard" className="hover:bg-blue-700 p-2 rounded">
          Dashboard
        </NavLink>
        <NavLink to="setting" className="hover:bg-blue-700 p-2 rounded">
          Setting
        </NavLink>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">
          Services
        </a>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">
          Contact
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
