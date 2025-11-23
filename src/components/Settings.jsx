import React, { useState } from "react";
import CategoriesSettings from "./CategoriesSettings";
import TitleCard from "./TitleCard";
import { dateValues } from "../helper/helper";

const Settings = () => {
  const [months, setMonths] = useState(0);

  const { monthStr, month, year } = dateValues(new Date(), months);

  return (
    <div className="md:ml-64 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8 ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4">Settings</h1>

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
