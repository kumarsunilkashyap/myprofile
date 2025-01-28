import React from "react";

const TransactionPage = () => {
  const transactions = [
    {
      id: 1,
      date: "2023-01-01",
      description: "Payment received",
      amount: 150.0,
      status: "Completed",
    },
    {
      id: 2,
      date: "2023-01-05",
      description: "Invoice sent",
      amount: -200.0,
      status: "Pending",
    },
    {
      id: 3,
      date: "2023-01-10",
      description: "Refund issued",
      amount: -50.0,
      status: "Completed",
    },
    {
      id: 4,
      date: "2023-01-15",
      description: "Payment received",
      amount: 300.0,
      status: "Completed",
    },
    // Add more transactions as needed
  ];

  return (
    <div className=" ml-64 flex-1 p-20 mt-16 lg:ml-64">
      <h1 className="text-3xl font-bold mb-8">Transactions</h1>
      <div className="bg-white p-4 rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.description}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    transaction.amount > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {transaction.amount > 0
                    ? `+₹${transaction.amount.toFixed(2)}`
                    : `-₹${Math.abs(transaction.amount).toFixed(2)}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaction.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionPage;
