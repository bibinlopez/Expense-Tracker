import React from "react";
import CategoriesSettings from "./CategoriesSettings";

const Settings = () => {
  return (
    <div className="md:ml-64 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8 ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4">Settings</h1>

          <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
            <button> left</button>

            <h2 className="text-xl">January</h2>

            <button>right</button>
          </div>
        </div>
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-6">
            <CategoriesSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
