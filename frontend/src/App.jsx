import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Dsa from "./pages/dashboard/Dsa";
import Core from "./pages/dashboard/Core";
import Aptitude from "./pages/dashboard/Aptitude";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dsa" element={<Dsa />} />
        <Route path="core-cs" element={<Core />} />
        <Route path="aptitude" element={<Aptitude />} />
      </Route>

    </Routes>
  );
}

export default App;