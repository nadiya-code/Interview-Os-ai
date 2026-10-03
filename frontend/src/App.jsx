import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./Layouts/PublicLayout";
import DashboardLayout from "./Layouts/DashboardLayout";

// Auth Pages
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

// Dashboard Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Dsa from "./pages/dashboard/Dsa";
import Core from "./pages/dashboard/Core";
import Aptitude from "./pages/dashboard/Aptitude";
import MockInterview from "./pages/dashboard/MockInterview";

// Mock Interview Pages
import MockInterviewSetup from "./pages/dashboard/mockInterview/MockInterviewSetup";
import MockInterviewSession from "./pages/dashboard/mockInterview/MockInterviewSession";
import MockInterviewResult from "./pages/dashboard/mockInterview/MockInterviewResult";

function App() {
  return (
    <Routes>

      {/* Public */}
      <Route
        path="/"
        element={<PublicLayout />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >

        {/* /dashboard */}
        <Route
          index
          element={<Dashboard />}
        />

        {/* /dashboard/dsa */}
        <Route
          path="dsa"
          element={<Dsa />}
        />

        {/* /dashboard/core-cs */}
        <Route
          path="core-cs"
          element={<Core />}
        />

        {/* /dashboard/aptitude */}
        <Route
          path="aptitude"
          element={<Aptitude />}
        />

        {/* Mock Interview */}
        <Route
          path="mock-interview"
          element={<MockInterview />}
        />

        {/* /dashboard/mock-interview/:category */}
        <Route
          path="mock-interview/:category"
          element={<MockInterviewSetup />}
        />

        {/* /dashboard/mock-interview/:category/start */}
        <Route
          path="mock-interview/:category/start"
          element={<MockInterviewSession />}
        />

        {/* /dashboard/mock-interview/:category/result */}
        <Route
          path="mock-interview/:category/result"
          element={<MockInterviewResult />}
        />

      </Route>

    </Routes>
  );
}

export default App;