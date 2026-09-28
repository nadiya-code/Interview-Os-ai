import {menu} from "../model/SideNavLinks";
import SideNav from "../components/sideNav"
function DashboardLayout() {
  return (
    <div>
      <div>
        <SideNav links={menu}></SideNav>
      </div>
    </div>
  );
}

export default DashboardLayout;