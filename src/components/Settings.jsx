import React, { useState } from "react";
import CategoriesSettings from "./CategoriesSettings";
import TitleCard from "./TitleCard";
import { dateValues } from "../helper/helper";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const [months, setMonths] = useState(0);

  const { monthStr, month, year } = dateValues(new Date(), months);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    navigate("/auth");
  };
  return (
    <div className="md:ml-64 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8 ">
        <div className="flex items-center justify-between mb-1">
          <h1>Settings</h1>
          <button
            onClick={() => handleLogout()}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
        {/* Header */}
        <div className="mb-8">
          <TitleCard
            months={months}
            setMonths={setMonths}
            monthStr={monthStr}
            year={year}
          />
        </div>
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="px-6 pt-6 pb-2">
            <CategoriesSettings date={{ month, year }} months={months} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
