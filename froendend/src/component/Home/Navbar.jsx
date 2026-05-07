import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user, setUser] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    loadUser();

    window.addEventListener("storage", loadUser);

    return () => window.removeEventListener("storage", loadUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavbar
          ? "translate-y-0 bg-transparent"
          : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src="/tourismicon1.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />

          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            VistaVoyage
          </h2>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div className="hidden md:flex gap-4 items-center">

          {!user ? (
            <>
              <Link to="/login">
                <button className="px-5 py-2 border border-white text-white rounded-full">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full font-semibold">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <ProfileDropdown
              user={user}
              open={openDropdown}
              setOpen={setOpenDropdown}
            />
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;