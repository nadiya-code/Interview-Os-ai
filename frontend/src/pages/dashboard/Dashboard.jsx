import { useState } from "react";
import { menu } from "../../model/SideNavLinks";
import SideNav from "../../components/sideNav";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">

      <SideNav
        links={menu}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main></main>
    </div>
  );
}

export default Dashboard;