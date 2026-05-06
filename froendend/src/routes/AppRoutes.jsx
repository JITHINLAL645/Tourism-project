import { Routes, Route } from "react-router-dom";
import Home from "../pages/User/home";
import Destinations from "../pages/User/Destinations"
import About from "../pages/User/About";
import Blog from "../pages/User/Blog";
import Contact from "../pages/User/Contact";
import Services from "../pages/User/Services";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      

    </Routes>
  );
}

export default AppRoutes;