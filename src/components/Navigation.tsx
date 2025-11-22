import {
  DollarSign,
  IndianRupee,
  LayoutDashboard,
  Plus,
  SettingsIcon,
  TrendingUp,
} from "lucide-react";
import React from "react";

const Navigation = () => {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t justify-between border-gray-200 md:hidden">
        <div className="grid grid-cols-3 h-16">
          <button
            className={`flex flex-col items-center justify-center gap-1 text-blue-600 text-gray-600`}
          >
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </button>

          <button
            className={`flex flex-col items-center justify-center gap-1  text-blue-600`}
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Reports</span>
          </button>

          <button
            className={`flex flex-col items-center justify-center gap-1 text-gray-600`}
          >
            <SettingsIcon className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>

      {/* Desktop Side Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 flex-col p-6">
        <div className="flex mb-8 items-center gap-4 justify-end">
          <div className="inline-flex items-center justify-center w-20 h-15 bg-blue-600 rounded-full">
            <IndianRupee className="w-7 h-7 text-white w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-blue-700">Expense Tracker</h2>
        </div>

        <div className="space-y-2 flex-1">
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors  bg-blue-50 text-blue-600`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </button>

          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
       `}
          >
            <TrendingUp className="w-5 h-5" />
            <span>Reports</span>
          </button>

          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-50`}
          >
            <SettingsIcon className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>

        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </nav>
    </>
  );
};

export default Navigation;
