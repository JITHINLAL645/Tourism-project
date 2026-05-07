import { Routes, Route } from "react-router-dom";
import Home from "../pages/User/home";
import Destinations from "../pages/User/Destinations"
import About from "../pages/User/About";
import Blog from "../pages/User/Blog";
import Contact from "../pages/User/Contact";
import Services from "../pages/User/Services";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminUsers from "../pages/Admin/AdminUsers";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/adminusers" element={<AdminUsers />} />
      

    </Routes>
  );
}

export default AppRoutes;