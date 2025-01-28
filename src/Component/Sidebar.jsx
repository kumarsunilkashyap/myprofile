import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 bg-blue-600 text-white h-full p-4 z-10">
      <nav className="flex flex-col space-y-4">
        <a href="#" className="hover:bg-blue-700 p-2 rounded">
          Home
        </a>
        <a href="#" className="hover:bg-blue-700 p-2 rounded">
          About
        </a>
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
