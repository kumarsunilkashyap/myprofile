import React from "react";

const DashboardContent = () => {
  return (
    <div className=" ml-64 flex-1 flex flex-col p-20 mt-16 lg:ml-64">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Users</h2>
          <p className="text-gray-600">1234</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Revenue</h2>
          <p className="text-gray-600">$5678</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Performance</h2>
          <p className="text-gray-600">89%</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
        <ul>
          <li className="border-b py-2">User A logged in</li>
          <li className="border-b py-2">User B updated profile</li>
          <li className="border-b py-2">User C made a purchase</li>
          <li className="py-2">User D logged out</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Messages</h2>
        <ul>
          <li className="border-b py-2">Message from User A</li>
          <li className="border-b py-2">Message from User B</li>
          <li className="border-b py-2">Message from User C</li>
          <li className="py-2">Message from User D</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardContent;
