import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex justify-between w-full h-screen">
      <Sidebar />

      <div className="flex-col left-[240px] relative flex gap-3">
        <Header />

        <div className="bg-(--gray-100) w-[calc(100vw-260px)] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
