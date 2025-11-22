import React from "react";

const CategoryModal = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3>{"category"}</h3>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close"
          ></button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="category-name" className="block mb-2">
              Category Name *
            </label>
            <input
              id="category-name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Groceries"
              required
              autoFocus
            />
          </div>

          {/* Color */}
          <div>
            <label className="block mb-3">Color *</label>
            <div className="grid grid-cols-5 gap-3">
              <button
                type="button"
                className="w-12 h-12 rounded-lg border-2 transition-all hover:scale-110 flex items-center justify-center"
              ></button>
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
              type="submit"
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
