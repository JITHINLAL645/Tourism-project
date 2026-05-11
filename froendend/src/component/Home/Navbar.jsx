import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import DestinationDropdown from "./DestinationDropdown";
import profileImg from "../../assets/profileimg1.png";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user, setUser] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDestination, setShowDestination] = useState(false);

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

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50  backdrop-blur-md transition-all duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/tourismicon1.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />

            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              VistaVoyage
            </h2>
          </Link>

          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-white">

            <li>
              <Link to="/" className="hover:text-amber-400 transition">
                Home
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => setShowDestination(!showDestination)}
                className="flex items-center gap-1 hover:text-amber-400 transition"
              >
                Destinations
                {showDestination ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            </li>

            <li>
              <Link to="/blog" className="hover:text-amber-400 transition">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-amber-400 transition">
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-amber-400 transition">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-amber-400 transition">
                About
              </Link>
            </li>

          </ul>

          <div className="hidden md:flex gap-4 items-center">
            {!user ? (
              <>
                <Link to="/login">
                  <button className="px-5 py-2 border border-white text-white rounded-full hover:border-amber-400 hover:text-amber-400 transition">
                    Login
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full font-semibold hover:scale-105 transition">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <ProfileDropdown
                user={user}
                open={openDropdown}
                setOpen={setOpenDropdown}
                profileImg={profileImg}
              />
            )}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {mobileMenu && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-6 pt-2 text-white space-y-4">

            <Link
              to="/"
              onClick={() => setMobileMenu(false)}
              className="block hover:text-amber-400"
            >
              Home
            </Link>

            <button
              onClick={() => setShowDestination(!showDestination)}
              className="flex items-center gap-2 hover:text-amber-400"
            >
              Destinations
              {showDestination ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            <Link
              to="/blog"
              onClick={() => setMobileMenu(false)}
              className="block hover:text-amber-400"
            >
              Blog
            </Link>

            <Link
              to="/services"
              onClick={() => setMobileMenu(false)}
              className="block hover:text-amber-400"
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="block hover:text-amber-400"
            >
              Contact
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenu(false)}
              className="block hover:text-amber-400"
            >
              About
            </Link>

            {!user ? (
              <div className="flex flex-col gap-3 pt-4">
                <Link to="/login">
                  <button className="w-full py-2 border border-white rounded-full">
                    Login
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="w-full py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full font-semibold">
                    Sign Up
                  </button>
                </Link>
              </div>
            ) : (
              <div className="pt-4">
                <ProfileDropdown
                  user={user}
                  open={openDropdown}
                  setOpen={setOpenDropdown}
                  profileImg={profileImg}
                />
              </div>
            )}
          </div>
        )}
      </nav>

      {showDestination && (
        <DestinationDropdown close={() => setShowDestination(false)} />
      )}
    </>
  );
}

export default Navbar;