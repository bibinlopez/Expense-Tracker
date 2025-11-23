import axios from "axios";
import { Check, X } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const colors = [
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
  "#f97316",
  "#06b6d4",
  "#6366f1",
];
const CategoryModal = ({ userId, edit, title, date, isOpen, setIsOpen }) => {
  const token = localStorage.getItem("accessToken");

  const [name, setName] = useState(edit ? data.name : "");
  const [budget, setBudget] = useState(edit ? data.budget : 0);
  const [selectedColor, setSelectedColor] = useState(
    edit ? data.color : colors[0]
  );
  const [loading, setLoading] = useState(false);

  const url = `${import.meta.env.VITE_BASE_API_URL}/category`;

  const handleSubmit = async (e) => {
    setName("");
    setBudget(0);
    setSelectedColor(colors[0]);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/category",
        {
          name,
          budget,
          color: selectedColor,
          date,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIsOpen(false);
      toast.success("Category Added Successfully");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Something went wrong !!!");
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3>{title}</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form className="px-6 pb-5 pt-2 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="category-name" className="block mb-2">
              Category Name *
            </label>
            <input
              id="category-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Groceries"
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="category-name" className="block mb-2">
              Budget *
            </label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              step="100"
              min="0"
              className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0.00"
            />
          </div>

          {/* Color */}
          <div>
            <label className="block mb-3">Color *</label>
            <div className="grid grid-cols-5 gap-3">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className="w-12 h-12 rounded-lg border-2 transition-all hover:scale-110 flex items-center justify-center"
                  style={{
                    backgroundColor: color,
                    borderColor:
                      selectedColor === color ? "#1f2937" : "transparent",
                  }}
                  aria-label={`Select color ${color}`}
                >
                  {selectedColor === color && (
                    <Check className="w-6 h-6 text-white drop-shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              // disabled={loading}
              type="button"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;
