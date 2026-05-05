import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-zinc-800">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold mb-5 tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              VistaVoyage
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Discover breathtaking destinations, curated tours, and
              unforgettable experiences across the world.
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
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>

            <ul className="space-y-3 text-zinc-400">
              <li className="hover:text-amber-400 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                Destinations
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                Tour Packages
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                Careers
              </li>
              <li className="hover:text-amber-400 transition cursor-pointer">
                Blog
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Support</h3>

            <ul className="space-y-3 text-zinc-400">
              <li className="hover:text-amber-400 transition cursor-pointer">
                Contact Us
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

          {/* Social + Payments */}
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

            <h4 className="text-lg font-medium mb-4 text-white">Payments</h4>

            <div className="flex gap-4 text-3xl text-zinc-400">
              <FaCcVisa className="hover:text-amber-400 transition" />
              <FaCcMastercard className="hover:text-amber-400 transition" />
              <FaCcPaypal className="hover:text-amber-400 transition" />
              <FaCcAmex className="hover:text-amber-400 transition" />
            </div>
          </div>
        </div>

        {/* Bottom */}
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