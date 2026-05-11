import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";

function Maldives() {
  const maldivesImg =
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1400";

  return (
    <>
      <Navbar />

      <section className="relative h-screen">
        <img
          src={maldivesImg}
          alt="Maldives"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Maldives
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-300">
            Discover crystal-clear waters, luxury villas, white sand beaches, and romantic escapes.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="relative group">
            <img
              src={maldivesImg}
              alt="Maldives"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl font-bold text-white">
                Tropical Heaven
              </h3>

              <p className="text-zinc-300 text-sm mt-1">
                Beaches • Villas • Romance • Luxury
              </p>
            </div>
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-4">
              Discover Maldives
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Ultimate Island Paradise
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mb-6">
              Maldives is one of the world’s most luxurious travel destinations,
              famous for turquoise lagoons, overwater villas, coral reefs,
              private islands, and breathtaking sunsets.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-10">
              Whether for honeymoon, family vacation, diving adventure,
              or peaceful relaxation, Maldives offers unforgettable memories.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">1,000+</h3>
                <p className="text-zinc-400 text-sm mt-2">Beautiful Islands</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">150+</h3>
                <p className="text-zinc-400 text-sm mt-2">Luxury Resorts</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">365</h3>
                <p className="text-zinc-400 text-sm mt-2">Days of Paradise</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-zinc-950 text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-amber-400">
          Top Places in Maldives
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Male City",
              img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200",
            },
            {
              name: "Maafushi Island",
              img: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=1200",
            },
            {
              name: "Vaadhoo Island",
              img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200",
            },
            {
              name: "Baa Atoll",
              img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
            },
            {
              name: "Hulhumale Beach",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
            },
            {
              name: "Ari Atoll",
              img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200",
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
          Top Hotels in Maldives
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Soneva Jani",
            "Gili Lankanfushi",
            "Conrad Maldives",
            "W Maldives",
            "Anantara Kihavah",
            "The St. Regis Maldives",
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-amber-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{hotel}</h3>

              <p className="text-zinc-400">
                Luxury island stay experience in Maldives.
              </p>
            </div>
          ))}
        </div>
      </section>
<section className="py-24 bg-black text-white px-6 md:px-20">
  <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
    Find Things To Do in Maldives
  </h2>

  <div className="space-y-8 max-w-6xl mx-auto">
    {[
      "Snorkeling with Coral Reefs",
      "Scuba Diving Adventures",
      "Private Island Hopping",
      "Luxury Spa Treatments",
      "Sunset Dolphin Cruise",
      "Underwater Dining Experience",
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
            Enjoy unforgettable moments and premium island experiences in the Maldives.
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

export default Maldives;