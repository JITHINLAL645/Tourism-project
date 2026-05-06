import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";

import baaliImg from "../../assets/baali.jpg";
import parisImg from "../../assets/paris.jpg";
import dubaiImg from "../../assets/dubai.jpg";

const Destinations = () => {
  const destinations = [
    { name: "Bali, Indonesia", img: baaliImg, location: "Asia", price: "₹89,999" },
    { name: "Paris, France", img: parisImg, location: "Europe", price: "₹1,49,999" },
    { name: "Dubai, UAE", img: dubaiImg, location: "Middle East", price: "₹1,29,999" },

    {
      name: "Goa, India",
      img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200",
      location: "India",
      price: "₹49,999",
    },
    
    {
      name: "New York, USA",
      img: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1200",
      location: "USA",
      price: "₹1,79,999",
    },
    {
      name: "Goa, India",
      img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200",
      location: "India",
      price: "₹49,999",
    },
    // {
    //   name: "Tokyo, Japan",
    //   img: "https://images.unsplash.com/photo-1540959733332-eab4de529383?q=80&w=1200",
    //   location: "Asia",
    //   price: "₹1,59,999",
    // },
    {
      name: "Santorini, Greece",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200",
      location: "Europe",
      price: "₹1,69,999",
    },
    
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
      location: "Indian Ocean",
      price: "₹1,19,999",
    },
    
    {
      name: "Marrakech, Morocco",
      img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1200",
      location: "Africa",
      price: "₹1,09,999",
    },
    // {
    //   name: "Sydney, Australia",
    //   img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8d0b9?q=80&w=1200",
    //   location: "Australia",
    //   price: "₹1,89,999",
    // },
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
      location: "Indian Ocean",
      price: "₹1,19,999",
    },
    {
      name: "Rome, Italy",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200",
      location: "Europe",
      price: "₹1,39,999",
    },
    {
      name: "Santorini, Greece",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200",
      location: "Europe",
      price: "₹1,69,999",
    },
    // {
    //   name: "Bangkok, Thailand",
    //   img: "https://images.unsplash.com/photo-1508009603885-50cf8d5d7c3a?q=80&w=1200",
    //   location: "Asia",
    //   price: "₹79,999",
    // },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070"
          alt="Destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-20">
          <div className="inline-block bg-white/10 px-6 py-2 rounded-full mb-6 border border-white/20 text-sm tracking-wider">
            ✈️ EXPLORE AMAZING PLACES
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Find Your Dream <br /> Destination
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10">
            Discover handpicked travel destinations across the world with
            unforgettable experiences.
          </p>

          <a
            href="#places"
            className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-amber-400 transition-all duration-300 text-lg inline-block"
          >
            Explore Now
          </a>
        </div>
      </section>

      {/* Destination Cards */}
      <section id="places" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-zinc-400 text-lg">
              Choose your next adventure destination
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-zinc-950 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-zinc-800"
              >
                <div className="relative">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs font-medium">
                    {dest.location}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{dest.name}</h3>

                  <p className="text-amber-400 font-medium text-lg">
                    From {dest.price}
                  </p>

                  <p className="text-zinc-400 mt-3 mb-6 text-sm">
                    Premium stays, guided tours and unforgettable moments await
                    you.
                  </p>

                  <button className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold rounded-2xl hover:brightness-110 transition-all">
                    View Package →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Can't Find Your Dream Place?
          </h2>

          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Let our travel experts create a fully personalized trip based on
            your budget and interests.
          </p>

          <button className="px-10 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-amber-400 transition-all duration-300 text-lg">
            Get Custom Package
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;