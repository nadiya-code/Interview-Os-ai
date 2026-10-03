import { useState } from "react";
import { Outlet } from "react-router-dom";

import SideNav from "../components/sideNav";
import { menu } from "../model/SideNavLinks";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <SideNav
        links={menu}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;