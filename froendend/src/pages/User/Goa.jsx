import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";

function Goa() {
  const goaImg =
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400";

  return (
    <>
      <Navbar />

      <section className="relative h-screen">
        <img
          src={goaImg}
          alt="Goa"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Goa
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-300">
            Discover golden beaches, vibrant nightlife, water sports, and tropical vibes.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-black text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="relative group">
            <img
              src={goaImg}
              alt="Goa"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl"></div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl font-bold text-white">
                Beach Paradise
              </h3>

              <p className="text-zinc-300 text-sm mt-1">
                Beaches • Parties • Nature • Relaxation
              </p>
            </div>
          </div>

          <div>
            <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-4">
              Discover Goa
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              India’s Favorite Beach Destination
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mb-6">
              Goa is one of India’s most loved travel destinations, known for
              stunning beaches, Portuguese heritage, beach shacks,
              nightlife, seafood, and adventure sports.
            </p>

            <p className="text-zinc-400 text-lg leading-8 mb-10">
              From sunrise beach walks to late-night parties,
              Goa offers the perfect escape for couples,
              families, solo travelers, and friends.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">40+</h3>
                <p className="text-zinc-400 text-sm mt-2">Top Beaches</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">120+</h3>
                <p className="text-zinc-400 text-sm mt-2">Resorts & Hotels</p>
              </div>

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
                <h3 className="text-3xl font-bold text-amber-400">365</h3>
                <p className="text-zinc-400 text-sm mt-2">Days of Fun</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-zinc-950 text-white px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-amber-400">
          Top Places in Goa
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Baga Beach",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
            },
            {
              name: "Calangute Beach",
              img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=1200",
            },
            {
              name: "Dudhsagar Falls",
              img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
            },
            {
              name: "Fort Aguada",
              img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200",
            },
            {
              name: "Anjuna Beach",
              img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200",
            },
            {
              name: "Chapora Fort",
              img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200",
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
          Top Hotels in Goa
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Taj Exotica Goa",
            "W Goa",
            "Grand Hyatt Goa",
            "Planet Hollywood Goa",
            "The Leela Goa",
            "Novotel Goa Resort",
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-amber-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{hotel}</h3>

              <p className="text-zinc-400">
                Premium beach stay experience in Goa.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-black text-white px-6 md:px-20">
  <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
    Find Things To Do in Goa
  </h2>

  <div className="space-y-8 max-w-6xl mx-auto">
    {[
      "Relax at Baga Beach",
      "Water Sports Adventures",
      "Explore Fort Aguada",
      "Enjoy Goa Nightlife",
      "Visit Dudhsagar Falls",
      "Taste Authentic Goan Seafood",
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
            Enjoy unforgettable beach vibes, adventure, food, and fun in Goa.
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

export default Goa;