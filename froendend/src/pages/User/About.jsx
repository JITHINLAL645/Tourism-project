import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070"
          alt="About Tourism"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full border border-white/20 hover:bg-white/20 transition mb-8"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Back Home
          </Link>

          <div className="max-w-4xl">
            {/* <div className="inline-block bg-white/10 px-6 py-2 rounded-full mb-6 border border-white/20 text-sm tracking-wider">
               ABOUT OUR JOURNEY
            </div> */}

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Discover The World <br /> With Us
            </h1>

            <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed">
              We create unforgettable travel experiences, premium holiday
              packages, and personalized adventures for travelers who dream big.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1200"
              alt="Travel Team"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-black/70 px-6 py-4 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-amber-400">10K+</h3>
              <p className="text-sm text-zinc-300">Happy Travelers</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Welcome To VistaVoyage Tourism
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              At VistaVoyage Tourism, we believe travel is more than visiting new
              places — it is about creating memories, discovering cultures, and
              experiencing life in extraordinary ways.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Our expert team designs luxury tours, family vacations, romantic
              getaways, honeymoon trips, adventure escapes, and customized
              itineraries across the world.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Whether you dream of Bali beaches, Paris streets, Dubai luxury, or
              mountain adventures, we make every journey seamless and magical.
            </p>
          </div>
        </div>
      </section>

      

      <section className="py-24 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready For Your Next Adventure?
          </h2>

          <p className="text-zinc-400 text-lg mb-10">
            Let us plan your perfect holiday with the best destinations and
            premium experiences.
          </p>

          <Link
            to="/destinations"
            className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-amber-400 transition-all duration-300 text-lg inline-block"
          >
            Explore Destinations
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;