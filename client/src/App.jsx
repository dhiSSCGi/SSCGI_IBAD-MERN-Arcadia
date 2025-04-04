import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./pages/layouts/Header";
import FooterLayout from "./pages/layouts/FooterLayout";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Innovations from "./pages/Innovations";

function App() {
  const [user, setUser] = useState(null);

  const getCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      if (!token || !user || token !== user.loginToken) {
        return null;
      }
      return user;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/login" element={<Login />} />
        {user && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>
      <FooterLayout />
    </BrowserRouter>
  );
}

export default App;
