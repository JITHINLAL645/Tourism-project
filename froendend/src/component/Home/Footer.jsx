import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-zinc-800">

          <div>
            <div className="flex items-center gap-3">
              <img
                src="/tourismicon1.png"
                alt="VistaVoyage Logo"
                className="w-10 h-10 object-contain rounded-full"
              />

              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                VistaVoyage
              </h2>
            </div>

            <p className="text-zinc-400 leading-relaxed mb-6 mt-4">
              Discover breathtaking destinations, curated tours, and unforgettable experiences across the world.
            </p>

            <div className="space-y-3 text-zinc-400 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-400" />
                <span>Kochi, Kerala, India</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400" />
                <span>info@vistavoyage.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-400" />
                <span>+91 0101010101</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link to="/about" className="hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/destinations" className="hover:text-amber-400 transition">
                  Destinations
                </Link>
              </li>

              <li>
                <Link to="#services" className="hover:text-amber-400 transition">
                  Tour Packages
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-amber-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/blog" className="hover:text-amber-400 transition">
                  Blog
                </Link>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Support</h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link to="/contact" className="hover:text-amber-400 transition">
                  Contact Us
                </Link>
              </li>

              <li className="hover:text-amber-400 transition cursor-pointer">
                FAQs
              </li>

              <li className="hover:text-amber-400 transition cursor-pointer">
                Booking Help
              </li>

              <li className="hover:text-amber-400 transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-amber-400 transition cursor-pointer">
                Terms & Conditions
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Connect With Us
            </h3>

            <div className="flex gap-4 mb-8">

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-amber-400 hover:text-black transition cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-amber-400 hover:text-black transition cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-amber-400 hover:text-black transition cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-amber-400 hover:text-black transition cursor-pointer">
                <FaLinkedinIn />
              </div>

            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm text-center md:text-left">
            © 2026 VistaVoyage. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-zinc-500">

            <span className="hover:text-amber-400 cursor-pointer transition">
              Privacy
            </span>

            <span className="hover:text-amber-400 cursor-pointer transition">
              Terms
            </span>

            <span className="hover:text-amber-400 cursor-pointer transition">
              Sitemap
            </span>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;