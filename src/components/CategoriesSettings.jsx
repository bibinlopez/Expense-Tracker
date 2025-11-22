import React from "react";

const CategoriesSettings = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3>Manage Categories and Budget</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          + Add Category
        </button>
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
      </div>
      <div className="space-y-2">
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
    </div>
  );
};

export default CategoriesSettings;
