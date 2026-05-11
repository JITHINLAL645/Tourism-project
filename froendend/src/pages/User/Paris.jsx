import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";
import parisImg from "../../assets/paris.jpg";

function Paris() {
  return (
    <>
      <Navbar />

      <section className="relative h-screen">
        <img
          src={parisImg}
          alt="Paris"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Paris
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-300">
            Discover romance, iconic landmarks, luxury shopping, art, and timeless beauty.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="relative group">
            <img
              src={parisImg}
              alt="Paris"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl font-bold text-white">
                City of Love
              </h3>

              <p className="text-zinc-300 text-sm mt-1">
                Romance • Fashion • Art • Culture
              </p>
            </div>
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-4">
              Discover Paris
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Most Elegant City in the World
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mb-6">
              Paris is one of the most visited cities in the world, famous for
              the Eiffel Tower, luxury fashion, beautiful streets, museums,
              charming cafés, and romantic atmosphere.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-10">
              From sunset at the Eiffel Tower to exploring the Louvre Museum,
              every corner of Paris feels magical. Perfect for couples,
              solo travelers, families, and dream vacations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">70+</h3>
                <p className="text-zinc-400 text-sm mt-2">Top Attractions</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">150+</h3>
                <p className="text-zinc-400 text-sm mt-2">Luxury Hotels</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">365</h3>
                <p className="text-zinc-400 text-sm mt-2">Days of Beauty</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-zinc-950 text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-amber-400">
          Top Places in Paris
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Eiffel Tower",
              img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=1200",
            },
            {
              name: "Louvre Museum",
              img: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?q=80&w=1200",
            },
            {
              name: "Notre Dame",
              img: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1200",
            },
            {
              name: "Arc de Triomphe",
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
            },
            {
              name: "Montmartre",
              img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200",
            },
            {
              name: "Seine River",
              img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200",
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
                  Explore the beauty of {place.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-black text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-amber-400">
          Top Hotels in Paris
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "The Ritz Paris",
            "Shangri-La Paris",
            "Le Meurice",
            "Four Seasons George V",
            "Hotel Lutetia",
            "Mandarin Oriental Paris",
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-amber-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{hotel}</h3>

              <p className="text-zinc-400">
                Premium luxury stay in Paris.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-black text-white px-6 md:px-20">
  <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
    Find Things To Do in Paris
  </h2>

  <div className="space-y-8 max-w-6xl mx-auto">
    {[
      "Visit Eiffel Tower",
      "Explore Louvre Museum",
      "Cruise on the Seine River",
      "Walk Through Montmartre",
      "Shop on Champs-Élysées",
      "Enjoy Parisian Cafés",
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
            Discover romance, art, fashion, culture, and timeless beauty in Paris.
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

export default Paris;