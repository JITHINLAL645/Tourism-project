import { useEffect } from "react";
import { toast } from "react-toastify";

function BookNowModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // page refresh stop
    toast("Booking Submitted Successfully!");
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-6xl h-[720px] rounded-3xl overflow-hidden shadow-2xl bg-black border border-zinc-800">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 text-white text-3xl hover:text-red-500 transition"
        >
          ✕
        </button>

        <div className="grid lg:grid-cols-2 h-full">

          <div className="relative p-10 flex flex-col justify-center bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070"
              alt="travel"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            <div className="relative z-10">
              <p className="uppercase tracking-widest text-zinc-300 text-sm mb-3">
                Booking
              </p>

              <div className="w-20 h-[2px] bg-white mb-6"></div>

              <h2 className="text-5xl font-bold text-white mb-8">
                Online Booking
              </h2>

              <p className="text-zinc-300 text-lg leading-8 mb-8">
                Discover amazing destinations, luxury stays, exciting tours and
                unforgettable travel experiences with our premium booking service.
              </p>

              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-300 transition">
                Read More
              </button>
            </div>
          </div>

          <div className="p-10 flex flex-col justify-center bg-black">
            <h2 className="text-5xl font-bold text-white mb-4">
              Book A Tour Deals
            </h2>

            <p className="text-zinc-300 text-lg mb-10">
              Get <span className="text-amber-400 font-bold">50% Off</span> On
              Your First Adventure Trip.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-zinc-900 text-white rounded-2xl px-6 py-4 outline-none border border-zinc-700"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-zinc-900 text-white rounded-2xl px-6 py-4 outline-none border border-zinc-700"
                />
              </div>

              <input
                type="text"
                placeholder="Search Destination..."
                required
                className="w-full bg-zinc-900 text-white rounded-2xl px-6 py-4 outline-none border border-zinc-700"
              />

              <div className="grid md:grid-cols-2 gap-5">
                <select
                  required
                  className="w-full bg-zinc-900 text-white rounded-2xl px-6 py-4 outline-none border border-zinc-700"
                >
                  <option value="">Persons</option>
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>Family</option>
                </select>

                <select
                  required
                  className="w-full bg-zinc-900 text-white rounded-2xl px-6 py-4 outline-none border border-zinc-700"
                >
                  <option value="">Categories</option>
                  <option>Kids</option>
                  <option>Couple</option>
                  <option>Family</option>
                  <option>Adventure</option>
                </select>
              </div>

              <textarea
                rows="5"
                placeholder="Special Request"
                className="w-full bg-zinc-900 text-white rounded-2xl px-6 py-4 outline-none resize-none border border-zinc-700"
              ></textarea>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-white text-black font-bold text-xl hover:bg-zinc-300 transition"
              >
                Book Now
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookNowModal;