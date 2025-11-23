import {
  DollarSign,
  IndianRupee,
  LayoutDashboard,
  Plus,
  SettingsIcon,
  TrendingUp,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Navigation = ({ setIsOpen }) => {
  const linkClassesSidebar = ({ isActive }) =>
    `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors  
     ${
       isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-200"
     }`;
  const linkClassesBottom = ({ isActive }) =>
    `flex flex-col items-center justify-center gap-1 
     ${isActive ? " text-blue-600" : "text-gray-600"}`;

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t justify-between border-gray-200 md:hidden">
        <div className="grid grid-cols-3 h-16">
          <NavLink to="/" className={linkClassesBottom}>
            <LayoutDashboard className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </NavLink>

          <NavLink to="/reports" className={linkClassesBottom}>
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Reports</span>
          </NavLink>

          <NavLink to="settings" className={linkClassesBottom}>
            <SettingsIcon className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </NavLink>
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
          <NavLink to="/" className={linkClassesSidebar}>
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/reports" className={linkClassesSidebar}>
            <TrendingUp className="w-5 h-5" />
            <span>Reports</span>
          </NavLink>

          <NavLink to="/settings" className={linkClassesSidebar}>
            <SettingsIcon className="w-5 h-5" />
            <span>Settings</span>
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </nav>
    </>
  );
};

export default Navigation;
