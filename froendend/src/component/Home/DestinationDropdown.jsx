import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import baaliImg from "../../assets/baali.jpg";
import parisImg from "../../assets/paris.jpg";
import dubaiImg from "../../assets/dubai.jpg";

function DestinationDropdown({ close }) {
  const destinations = [
    { name: "Bali", img: baaliImg, path: "/bali" },
    { name: "Paris", img: parisImg, path: "/paris" },
    { name: "Dubai", img: dubaiImg, path: "/dubai" },
    {
      name: "Goa",
      img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200",
      path: "/goa",
    },
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200",
      path: "/maldives",
    },
    {
      name: "Rome",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200",
      path: "/rome",
    },
    {
      name: "Santorini",
      img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200",
      path: "/santorini",
    },
    {
      name: "New York",
      img: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=1200",
      path: "/newyork",
    },
    {
      name: "Marrakech",
      img: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1200",
      path: "/marrakech",
    },
  ];

  return (
    <div className="fixed top-[80px] left-0 right-0 z-40 bg-black/60 backdrop-blur-xl text-white px-6 py-8">
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {destinations.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              onClick={close}
              className="bg-zinc-900/80 rounded-3xl overflow-hidden hover:scale-[1.03] transition-all duration-300 border border-zinc-700"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              <div className="py-4 text-center font-semibold text-lg">
                {item.name}
              </div>
            </Link>
          ))}

          <Link
            to="/destinations"
            onClick={close}
            className="bg-zinc-900/80 rounded-3xl border border-zinc-700 flex flex-col items-center justify-center min-h-[300px] hover:scale-[1.03] transition-all duration-300 group"
          >
            <div className="text-2xl font-bold mb-4">View More</div>

            <div className="w-14 h-14 rounded-full bg-amber-400 text-black flex items-center justify-center group-hover:translate-x-1 transition">
              <ArrowRight size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationDropdown;