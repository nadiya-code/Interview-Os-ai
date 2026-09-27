import {SideNavLinks} from "../model/SideNavLinks";
import SideNav from "../components/sideNav"
import Footer from "../components/Footer";
function DashboardLayout() {
  return (
    <div>
      <SideNav links={SideNavLinks}></SideNav>
      <Footer login={true}></Footer>
    </div>
  );
}

export default DashboardLayout;