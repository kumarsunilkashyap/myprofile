import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyWebsite</div>
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md mr-2">
            Login
          </button>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
