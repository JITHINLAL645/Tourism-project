import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";
import dubaiImg from "../../assets/dubai.jpg";

function Dubai() {
  return (
    <>
      <Navbar />

      <section className="relative h-screen">
        <img
          src={dubaiImg}
          alt="Dubai"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Dubai
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-300">
            Experience luxury, futuristic skylines, desert adventures, and world-class attractions.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="relative group">
            <img
              src={dubaiImg}
              alt="Dubai"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl font-bold text-white">
                City of Luxury
              </h3>

              <p className="text-zinc-300 text-sm mt-1">
                Skyline • Desert • Shopping • Adventure
              </p>
            </div>
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-4">
              Discover Dubai
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Where Innovation Meets Luxury
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mb-6">
              Dubai is one of the most modern cities in the world, known for
              iconic skyscrapers, luxury hotels, golden deserts, shopping malls,
              beaches, and extraordinary experiences.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-10">
              From visiting Burj Khalifa to desert safari adventures,
              Dubai offers unforgettable moments for families,
              couples, solo travelers, and luxury seekers.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">60+</h3>
                <p className="text-zinc-400 text-sm mt-2">Top Attractions</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">200+</h3>
                <p className="text-zinc-400 text-sm mt-2">Luxury Hotels</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">365</h3>
                <p className="text-zinc-400 text-sm mt-2">Days of Luxury</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-zinc-950 text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-amber-400">
          Top Places in Dubai
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Burj Khalifa",
              img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
            },
            {
              name: "Palm Jumeirah",
              img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
            },
            {
              name: "Dubai Mall",
              img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200",
            },
            {
              name: "Desert Safari",
              img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
            },
            {
              name: "Dubai Marina",
              img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200",
            },
            {
              name: "Museum of the Future",
              img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-amber-400 hover:scale-[1.03] transition-all duration-300 shadow-xl"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">
                  {place.name}
                </h3>

                <p className="text-zinc-400">
                  Discover the beauty of {place.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-amber-400">
          Top Hotels in Dubai
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Burj Al Arab",
            "Atlantis The Palm",
            "Armani Hotel Dubai",
            "Jumeirah Beach Hotel",
            "Address Downtown",
            "Palazzo Versace Dubai",
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-amber-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{hotel}</h3>

              <p className="text-zinc-400">
                Luxury stay experience in Dubai.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-black text-white px-6 md:px-20">
  <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
    Find Things To Do in Dubai
  </h2>

  <div className="space-y-8 max-w-6xl mx-auto">
    {[
      "Visit Burj Khalifa",
      "Enjoy Desert Safari Adventure",
      "Shop at Dubai Mall",
      "Cruise Through Dubai Marina",
      "Relax at Jumeirah Beach",
      "Explore Museum of the Future",
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row md:items-center gap-5 border-b border-zinc-800 pb-8"
      >
        <div className="w-4 h-4 rounded-full bg-gray-700 mt-2"></div>

        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">
            {item}
          </h3>

          <p className="text-zinc-400 leading-7 max-w-2xl">
            Discover luxury attractions, adventure, shopping, and unforgettable experiences in Dubai.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      <Footer />
    </>
  );
}

export default Dubai;