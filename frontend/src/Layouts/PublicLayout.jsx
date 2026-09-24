import Nav from "../components/Nav.jsx"
import Introduction from "../components/Introduction.jsx"
import {NavLinks} from "../model/NavLinks.js";
import Footer from "../components/Footer.jsx";
function PublicLayout() {
  return (
    <>
    <Nav>
      {NavLinks}
    </Nav>
    <Introduction></Introduction>
    <Footer></Footer>
    </>
  );
}
export default PublicLayout;