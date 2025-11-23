import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import ExpenseModal from "./ExpenseModal";

const HomeLayout = () => {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  return (
    <>
      <Navigation setIsOpen={setIsExpenseModalOpen} />
      <Outlet />
      <ExpenseModal
        isOpen={isExpenseModalOpen}
        setIsOpen={setIsExpenseModalOpen}
      />
    </>
  );
};

export default HomeLayout;
