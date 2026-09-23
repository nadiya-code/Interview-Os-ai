import { Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  );
}

export default App;