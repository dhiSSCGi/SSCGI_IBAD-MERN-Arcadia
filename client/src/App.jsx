import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./pages/layouts/Header";
import FooterLayout from "./pages/layouts/FooterLayout";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <FooterLayout />
    </BrowserRouter>
  );
}

export default App;
