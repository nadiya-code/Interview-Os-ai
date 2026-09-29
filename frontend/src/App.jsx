import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dsa from "./pages/dashboard/Dsa";
import Core from "./pages/dashboard/Core";
import Aptitude from "./pages/dashboard/Aptitude";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/dsa" element={<Dsa/>} />
      <Route path="/dashboard/core-cs" element ={<Core/>}/>
      <Route path="/dashboard/aptitude" element ={<Aptitude/>}/>
    </Routes>
  );
}
export default App;