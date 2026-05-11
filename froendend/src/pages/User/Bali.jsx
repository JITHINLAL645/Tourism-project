import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";
import baliImg from "../../assets/baali.jpg";

function Bali() {
  return (
    <>
      <Navbar />

      <section className="relative h-screen">
        <img
          src={baliImg}
          alt="Bali"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Bali
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-300">
            Explore paradise beaches, tropical forests, temples, and unforgettable sunsets.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-black text-white border-t border-zinc-800">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    <div className="relative group">
      <img
        src={baliImg}
        alt="Bali"
        className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-[1.02] transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl"></div>

      <div className="absolute bottom-6 left-6">
        <h3 className="text-3xl font-bold text-white">
          Island of Paradise
        </h3>
        <p className="text-zinc-300 text-sm mt-1">
          Beaches • Nature • Luxury • Culture
        </p>
      </div>
    </div>

    <div>
      <p className="text-amber-400 uppercase tracking-[4px] text-sm mb-4">
        Discover Bali
      </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        A Tropical Escape Full of Beauty & Culture
      </h2>

      <p className="text-zinc-400 text-lg leading-8 mb-6">
        Bali is one of the world’s most iconic travel destinations, known for
        its breathtaking beaches, luxurious resorts, green rice terraces,
        majestic temples, and vibrant nightlife. Whether you seek relaxation,
        romance, adventure, or spiritual peace, Bali offers an unforgettable
        journey for every traveler.
      </p>

      <p className="text-zinc-400 text-lg leading-8 mb-10">
        From sunrise hikes at Mount Batur to sunset views at Tanah Lot Temple,
        every moment in Bali feels magical. It is the perfect destination for
        couples, families, solo travelers, and honeymooners.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

        <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
          <h3 className="text-3xl font-bold text-amber-400">50+</h3>
          <p className="text-zinc-400 text-sm mt-2">Top Attractions</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center">
          <h3 className="text-3xl font-bold text-amber-400">100+</h3>
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
    Top Places in Bali
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Ubud Forest",
        img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200",
      },
      {
  name: "Tanah Lot Temple",
  img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200",
},
      {
        name: "Kuta Beach",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
      },
      {
        name: "Nusa Penida",
        img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
      },
      {
        name: "Seminyak",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200",
      },
      {
        name: "Mount Batur",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
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
          Top Hotels in Bali
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "The Apurva Kempinski",
            "Ayana Resort Bali",
            "W Bali Seminyak",
            "Four Seasons Bali",
            "Alila Villas Uluwatu",
            "The Mulia Bali",
          ].map((hotel, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-amber-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{hotel}</h3>

              <p className="text-zinc-400">
                Luxury stay experience in Bali.
              </p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="py-24 bg-black text-white px-6 md:px-20">
  <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
    Find Things To Do in Bali
  </h2>

  <div className="space-y-8 max-w-6xl mx-auto">
    {[
      "Visit Ubud Monkey Forest",
      "Watch Sunset at Tanah Lot Temple",
      "Relax at Kuta Beach",
      "Explore Nusa Penida Island",
      "Hike Mount Batur Sunrise Trek",
      "Enjoy Bali Spa & Beach Clubs",
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
            Discover tropical beauty, temples, beaches, adventure, and unforgettable experiences in Bali.
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

export default Bali;