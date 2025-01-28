import React from "react";

const LogoutPage = () => {
  return (
    <div className=" ml-64 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">You have been logged out</h1>
        <p className="text-gray-600 mb-4">
          Thank you for using our service. You have been successfully logged
          out.
        </p>
        <a
          href="/login"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
        >
          Login Again
        </a>
      </div>
    </div>
  );
};

export default LogoutPage;
