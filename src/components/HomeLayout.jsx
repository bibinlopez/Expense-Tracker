import React from "react";

import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const HomeLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default HomeLayout;
