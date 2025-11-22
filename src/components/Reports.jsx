import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dateValues } from "../utils/helper";

const Reports = () => {
  const token = localStorage.getItem("accessToken");

  const [categories, setCategories] = useState([]);
  const [months, setMonths] = useState(0);

  const { monthStr, month, year } = dateValues(new Date(), months);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/category/${month}/${year}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const categories = response?.data?.categories;
        setCategories(categories);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [months]);

  return (
    <div className="md:ml-64 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8 ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4">Reports</h1>

          <div className="flex items-center justify-between bg-white rounded-lg p-6 shadow-sm">
            <button
              onClick={() => {
                setMonths(months - 1);
              }}
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <h2 className="text-xl">
              {monthStr} {year}
            </h2>

            <button
              onClick={() => {
                setMonths(months + 1);
              }}
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-right">Spent</th>
                  <th className="px-6 py-3 text-right">Budget</th>
                  <th className="px-6 py-3 text-right">Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: "red" }}
                        />
                        {category.name}
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-right text-blue-600`}>
                      ₹{category.expense}
                    </td>
                    <td className="px-6 py-4 text-right">₹{category.budget}</td>
                    <td
                      className={`px-6 py-4 text-right ${
                        category.budget - category.expense < 0
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      <span>₹{category.budget - category.expense}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
