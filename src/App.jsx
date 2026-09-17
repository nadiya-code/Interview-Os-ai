import Nav from "./components/Nav.jsx";
function App() {
  const NavLinks = [
    { name: "Preparation", icon: true, link: "#",type:"link" },
    { name: "AI Tools", icon: true, link: "#" ,type:"link"},
    { name: "Resources", icon: true, link: "#",type:"link"},
    { name: "Companies", icon: true, link: "#",type:"link"},
    { name: "Pricing", icon: true, link: "#" ,type:"link"},
    { name: "Login", icon: false, link: "#" ,type:"link"},
    { name: "Get Started", icon: false, link: "#" ,type:"link"}
  ];
  return (
    <Nav>
      {NavLinks}
    </Nav>
  );
}
export default App;