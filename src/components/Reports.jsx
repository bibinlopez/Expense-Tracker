import React from "react";

const Reports = () => {
  return (
    <div className="md:ml-64 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8 ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-blue-300">Reports</h1>

          <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
            <button> left</button>

            <h2 className="text-xl">January</h2>

            <button>right</button>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-green-500">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right">Spent</th>
                  <th className="px-6 py-3 text-right">Budget</th>
                  <th className="px-6 py-3 text-right">Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-300 ">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full    " />
                      category
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-right text-blue-600`}>
                    40000.00
                  </td>
                  <td className="px-6 py-4 text-right">₹ 20000.00</td>
                  <td
                    className={`px-6 py-4 text-right text-red-600
                    }`}
                  >
                    <span>50000</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
