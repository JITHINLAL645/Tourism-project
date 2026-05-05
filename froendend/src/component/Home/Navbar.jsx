import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNavbar
          ? "translate-y-0 bg-transparent"
          : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-white">
            VistaVoyage
          </h1>
          {/* <p className="text-xs text-zinc-300 -mt-1">
            Travel Beyond Limits
          </p> */}
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-white">
          <li><a href="#home" className="hover:text-amber-400">Home</a></li>
          <li><a href="#destinations" className="hover:text-amber-400">Destinations</a></li>
          <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
          <li><a href="#about" className="hover:text-amber-400">About</a></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 border border-white text-white rounded-full hover:bg-white/10">
            Login
          </button>

          <button className="px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;