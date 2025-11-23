import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TitleCard from "./TitleCard";
import { dateValues } from "../helper/helper";

const Reports = () => {
  const token = localStorage.getItem("accessToken");

  const [categories, setCategories] = useState([]);
  const [months, setMonths] = useState(0);

  const { monthStr, month, year } = dateValues(new Date(), months);

  const url = `${import.meta.env.VITE_BASE_API_URL}/category/${month}/${year}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
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
          <TitleCard
            months={months}
            setMonths={setMonths}
            monthStr={monthStr}
            year={year}
          />
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
                          className="w-4 h-4  rounded-full flex-shrink-0 mr-5"
                          style={{ backgroundColor: category.color }}
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
