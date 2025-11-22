import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const TitleCard = ({ months, setMonths, monthStr, year }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-6 shadow-sm">
      <button
        onClick={() => {
          setMonths(months - 1);
        }}
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <h2 className="text-xl">
        {monthStr} {year}
      </h2>

      <button
        onClick={() => {
          setMonths(months + 1);
        }}
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </div>
  );
};

export default TitleCard;
