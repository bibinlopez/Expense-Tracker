import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryModal from "./CategoryModal";
import { Pencil, Trash } from "lucide-react";
// Pencil Trash

const CategoriesSettings = ({ date, months }) => {
  const token = localStorage.getItem("accessToken");

  const { month, year } = date;

  const [categories, setCategories] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const url = `${import.meta.env.VITE_BASE_API_URL}/${month}/${year}`;

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
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3>Manage Categories and Budget</h3>
        <button
          onClick={() => setIsOpen(true)}
          className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Add Category
        </button>
      </div>

      {categories.map((category) => (
        <div className="space-y-2 mb-4">
          <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div
              className="w-5 h-5 rounded-full flex-shrink-0 mr-5"
              style={{ backgroundColor: category.color }}
            />
            <div className="flex-1 overflow-hidden whitespace-nowrap truncate text-xl">
              {category.name}
            </div>

            <div className="w-32 text-center flex-none whitespace-nowrap text-xl">
              {category.budget == 0 ? "-" : `₹${category.budget}`}
            </div>

            <div className="flex gap-5 flex-none pl-5 md:pl-10 lg:pl-60 ">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg  cursor-pointer">
                <Pencil className="w-5 h-5" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer">
                <Trash />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="space-y-2 mb-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors justify-between pl-10">
          <span className="">{"category.name"}</span>
          <span>amount</span>
          <div className="flex gap-2">
            <button
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Edit category"
            >
              pencil
            </button>
            <button
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete category"
            >
              trash
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors justify-between pl-10">
          <span className="">{"category.name"}</span>
          <span>amount</span>
          <div className="flex gap-2">
            <button
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Edit category"
            >
              pencil
            </button>
            <button
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete category"
            >
              trash
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors justify-between pl-10">
          <span className="">{"category.name"}</span>
          <span>amount</span>
          <div className="flex gap-2">
            <button
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label="Edit category"
            >
              pencil
            </button>
            <button
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete category"
            >
              trash
            </button>
          </div>
        </div>
      </div> */}

      <CategoryModal
        date={date}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add Category"
      />
    </div>
  );
};

export default CategoriesSettings;
