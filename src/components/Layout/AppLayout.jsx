import { Outlet } from "react-router-dom";
import { Footers } from "../UI/Footers";
import { Headers } from "../UI/Headers";
import React from 'react';

export const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
};