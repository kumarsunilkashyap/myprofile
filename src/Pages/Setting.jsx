import React from "react";

const SettingsPage = () => {
  return (
    <div className=" ml-64 flex-1 p-20 mt-16 lg:ml-64">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Account Settings</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <form className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="email_notifications"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="email_notifications"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Email Notifications
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sms_notifications"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="sms_notifications"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              SMS Notifications
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
        <form className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="public_profile"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="public_profile"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Public Profile
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="profile_visibility"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="profile_visibility"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Profile Visibility
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
