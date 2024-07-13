import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/shared/Layout";
import Dashboard from "./Components/Dashboard";
import Projects from "./Components/Projects";
import { SignUpForm } from "./Components/Users/SignUpForm";
import LoginForm from "./Components/Users/LoginForm";
import ResetPassword from "./Components/Users/ResetPassword";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        <Route
          element={
            <Layout
              isExpanded={isExpanded}
              handleToggleSidebar={handleToggleSidebar}
            />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
