import Nav from "./components/Nav.jsx";
import Introduction from "./components/Introduction.jsx"
import {NavLinks} from "./model/NavLinks";
function App() {
  return (
    <>
    <Nav>
      {NavLinks}
    </Nav>
    <Introduction></Introduction>
    </>
  );
}
export default App;