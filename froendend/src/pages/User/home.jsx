import { useState } from "react";
import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(1); 

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const exploreItems = [
    {
      title: "Flights to top cities from India",
      items: [
        "Flights to Dubai", "Flights to Kuwait City", "Flights to Abu Dhabi",
        "Flights to Riyadh", "Flights to Muscat", "Flights to Doha",
        "Flights to Dammam", "Flights to Jeddah", "Flights to Sharjah",
        "Flights to Manama", "Flights to Bangkok", "Flights to Ras al Khaimah"
      ]
    },
    {
      title: "Flights to top countries from India",
      items: [
        "Flights to United Arab Emirates", "Flights to Saudi Arabia",
        "Flights to Kuwait", "Flights to Oman", "Flights to Qatar",
        "Flights to Thailand", "Flights to Bahrain", "Flights to United States",
        "Flights to Canada", "Flights to Malaysia", "Flights to Vietnam",
        "Flights to Russian Federation"
      ]
    },
    {
      title: "Hotels in top cities",
      items: [
        "Hotels in Goa", "Hotels in Mumbai", "Hotels in New Delhi",
        "Hotels in Bangalore", "Hotels in Udaipur", "Hotels in Puri",
        "Hotels in Jaipur", "Hotels in Varanasi", "Hotels in Hyderabad",
        "Hotels in Kolkata", "Hotels in Dubai", "Hotels in Pattaya",
        "Hotels in Bangkok"
      ]
    },
    {
      title: "Hotels in top countries",
      items: [
        "Hotels in Thailand", "Hotels in United Arab Emirates",
        "Hotels in Singapore", "Hotels in Malaysia", "Hotels in Indonesia",
        "Hotels in Vietnam", "Hotels in Nepal", "Hotels in Maldives",
        "Hotels in United States", "Hotels in Saudi Arabia",
        "Hotels in Sri Lanka", "Hotels in Japan", "Hotels in South Korea",
        "Hotels in United Kingdom", "Hotels in China"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <section id="home" className="relative min-h-screen flex items-center">
  <img
    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
    alt="Travel"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-20">

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
      Your Adventure <br /> Awaits
    </h1>

    {/* Paragraph */}
    <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10">
      Discover breathtaking destinations, curated tours, and unforgettable experiences.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
      <a
        href="#destinations"
        className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-amber-400 transition-all duration-300 text-lg"
      >
        Explore Destinations
      </a>

      <a
        href="#explore"
        className="px-10 py-4 border-2 border-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 text-lg text-white"
      >
        Book Now
      </a>
    </div>

    {/* Center Search Bar */}
    <div className="flex justify-center">
      <div className="flex items-center bg-white/10 backdrop-blur-md px-4 md:px-6 py-3 rounded-full border border-white/20 w-full max-w-2xl shadow-lg">
        
        {/* Icon */}
        <span className="text-red-500 text-xl mr-3">📍</span>

        {/* Input */}
        <input
          type="text"
          placeholder="Search destinations, cities, places..."
          className="bg-transparent outline-none text-white placeholder-white/70 flex-1 text-sm md:text-base"
        />

        {/* Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm md:text-base transition">
          Search
        </button>

      </div>
    </div>

  </div>
</section>

      <section id="destinations" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-zinc-400 text-lg">Choose your dream destination</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bali Card */}
            <div className="bg-zinc-950 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-zinc-800">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070"
                  alt="Bali"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs font-medium">
                  Trending
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-2">Bali, Indonesia</h3>
                <p className="text-amber-400 font-medium text-lg">7 Days • From ₹89,999</p>
                <p className="text-zinc-400 mt-4 mb-8 line-clamp-3">
                  Paradise beaches, ancient temples, vibrant culture and unforgettable sunsets.
                </p>
                <button className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-2xl hover:brightness-110 transition-all">
                  View Package →
                </button>
              </div>
            </div>

            {/* Dubai & Paris Cards (same style) */}
            <div className="bg-zinc-950 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-zinc-800">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
                  alt="Dubai"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-2">Dubai, UAE</h3>
                <p className="text-amber-400 font-medium text-lg">5 Days • From ₹1,29,999</p>
                <p className="text-zinc-400 mt-4 mb-8 line-clamp-3">
                  Luxury, skyscrapers, desert adventures in the city of the future.
                </p>
                <button className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-2xl hover:brightness-110 transition-all">
                  View Package →
                </button>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-zinc-800">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070"
                  alt="Paris"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-2">Paris, France</h3>
                <p className="text-amber-400 font-medium text-lg">6 Days • From ₹1,49,999</p>
                <p className="text-zinc-400 mt-4 mb-8 line-clamp-3">
                  Romance, art, and iconic landmarks in the City of Light.
                </p>
                <button className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-2xl hover:brightness-110 transition-all">
                  View Package →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="explore" className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Popular Flights &amp; Hotels</h2>
            <p className="text-zinc-400 text-lg">Best travel options from India</p>
          </div>

          <div className="space-y-4">
            {exploreItems.map((section, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-400/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group hover:bg-zinc-900"
                >
                  <h3 className="text-xl font-semibold group-hover:text-amber-400 transition-colors">
                    {section.title}
                  </h3>
                  <span className={`text-3xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 px-8 ${
                    openIndex === index ? 'max-h-[600px] pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 text-zinc-300">
                    {section.items.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="hover:text-amber-400 transition-colors py-1 text-[15px]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;