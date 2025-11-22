import React, { useState } from "react";
import { CategoryCard } from "./CategoryCard";
import TitleCard from "./TitleCard";
import { dateValues } from "../helper/helper";

const Dashboard = () => {
  const [months, setMonths] = useState(0);

  const { monthStr, month, year } = dateValues(new Date(), months);
  return (
    <div className="md:ml-64 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8 ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4">Dashboard</h1>

          <TitleCard
            months={months}
            setMonths={setMonths}
            monthStr={monthStr}
            year={year}
          />
        </div>
        {/* Category Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 mb-4">No categories yet</p>
            <p className="text-gray-400 text-sm">
              Go to Settings to add categories and budgets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
