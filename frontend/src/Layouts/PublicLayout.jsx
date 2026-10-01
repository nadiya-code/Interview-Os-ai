import Nav from "../components/Nav.jsx";
import Introduction from "../components/Introduction.jsx";
import Footer from "../components/Footer.jsx";
import { NavLinks } from "../model/NavLinks.js";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Nav links={NavLinks} />

      <main className="flex-1">
        <Introduction />
      </main>

      <Footer login={false} />
    </div>
  );
}

export default PublicLayout;