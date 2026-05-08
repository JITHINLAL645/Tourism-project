import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "../pages/User/Home";
import Destinations from "../pages/User/Destinations";
import About from "../pages/User/About";
import Blog from "../pages/User/Blog";
import Contact from "../pages/User/Contact";
import Services from "../pages/User/Services";
import Profile from "../pages/User/Profile";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminUsers from "../pages/Admin/AdminUsers";

function PageLoader() {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[9999]">
      
      <div className="relative w-20 h-20">
        
        <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>

        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-400 border-r-orange-500 animate-spin"></div>

        <div className="absolute inset-3 rounded-full border-4 border-transparent border-b-amber-300 border-l-orange-400 animate-spin [animation-direction:reverse]"></div>

      </div>

    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

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
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default AppRoutes;