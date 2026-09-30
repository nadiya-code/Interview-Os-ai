import { useState } from "react";
import { Outlet } from "react-router-dom";

import SideNav from "../components/sideNav";
import { menu } from "../model/SideNavLinks";

function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">

      <SideNav
        links={menu}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;