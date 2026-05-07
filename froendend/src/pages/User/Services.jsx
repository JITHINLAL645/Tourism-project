import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";

const Services = () => {
  const services = [
    {
      icon: "🌍",
      title: "International Tours",
      desc: "Explore premium destinations worldwide with carefully curated travel packages and unforgettable experiences.",
    },
    {
      icon: "🏨",
      title: "Hotel Booking",
      desc: "Book luxury hotels, resorts, and stays at the best prices with comfort and convenience guaranteed.",
    },
    {
      icon: "✈️",
      title: "Flight Reservation",
      desc: "Get affordable domestic and international flight tickets with seamless booking support.",
    },
    {
      icon: "🚗",
      title: "Transport Services",
      desc: "Airport pickups, city travel, rental cars, and private transport for smooth journeys.",
    },
    {
      icon: "🛂",
      title: "Visa Assistance",
      desc: "Professional support for tourist visa processing, documentation, and approvals.",
    },
    {
      icon: "🎯",
      title: "Custom Tour Plans",
      desc: "Create personalized travel plans based on your budget, interests, and travel goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-[75vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Our Professional <br /> Services
          </h1>

          <p className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10">
            We provide complete travel services to make your trip smooth,
            luxurious, and unforgettable.
          </p>

          <a
            href="#services"
            className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-amber-400 transition-all duration-300 text-lg"
          >
            Explore Services
          </a>
        </div>
      </section>

      <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-400 uppercase tracking-[4px] mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Best Travel Services
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Trusted services designed to give you comfort, convenience, and
              unforgettable travel memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-amber-400/40 hover:-translate-y-2 transition-all duration-500 shadow-xl group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-400 transition">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {item.desc}
                </p>

                <button className="mt-6 text-amber-400 font-medium hover:translate-x-2 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070"
              alt="Travel"
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[4px] mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              We Make Every Journey Special
            </h2>

            <div className="space-y-6">
              <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">
                  ✔ Trusted Experience
                </h3>
                <p className="text-zinc-400">
                  Years of expertise delivering memorable trips worldwide.
                </p>
              </div>

              <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">
                  ✔ Affordable Pricing
                </h3>
                <p className="text-zinc-400">
                  Competitive packages without compromising quality.
                </p>
              </div>

              <div className="bg-black border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">
                  ✔ 24/7 Support
                </h3>
                <p className="text-zinc-400">
                  Dedicated support team ready whenever you need help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;