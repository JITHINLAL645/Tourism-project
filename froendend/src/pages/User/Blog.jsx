import { useState } from "react";
import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";

const Blog = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const blogPosts = [
    {
      id: 1,
      title: "Northern Lights Russia — The Complete Murmansk Aurora Guide",
      category: "Russia • Murmansk",
      date: "30 Apr",
      image:
        "https://images.unsplash.com/photo-1511497584788-8767609c8c3c?q=80&w=1200",
      excerpt:
        "Somewhere above the Arctic Circle in Murmansk, the sky turns electric green and the world feels magical.",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "26 Most Beautiful Places to Visit in New Zealand",
      category: "New Zealand",
      date: "27 Apr",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200",
      excerpt:
        "New Zealand looks like it was designed by someone who had never heard the word ordinary.",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Almaty Family Tour 2026 — Complete Guide",
      category: "Kazakhstan • Almaty",
      date: "22 Apr",
      image:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=1200",
      excerpt:
        "Kazakhstan is becoming a hidden gem for Indian families seeking unique holidays.",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Hidden Gems of Kerala Backwaters",
      category: "India • Kerala",
      date: "18 Apr",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
      excerpt:
        "Beyond tourist boats lies a peaceful world of villages, temples, and breathtaking beauty.",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Solo Travel in Iceland",
      category: "Iceland",
      date: "15 Apr",
      image:
        "https://images.unsplash.com/photo-1506059612708-20c5b2c5c8e3?q=80&w=1200",
      excerpt:
        "From glaciers to volcanoes, Iceland is a dream destination for solo travelers.",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Best Street Food in Bangkok",
      category: "Thailand • Bangkok",
      date: "10 Apr",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200",
      excerpt:
        "Bangkok’s streets are a paradise for food lovers with endless flavors.",
      readTime: "6 min read",
    },
  ];

  const filteredPosts =
    activeTab === "latest" ? blogPosts.slice(0, 6) : blogPosts.slice(2, 6);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070"
          alt="Travel Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center pt-20">
          {/* <div className="inline-block bg-white/10 px-6 py-2 rounded-full mb-6 border border-white/20 text-sm tracking-wider">
             STORIES FROM AROUND THE WORLD
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            VistaVoyage <br /> Travel Blog
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-10">
            Inspiring travel stories, destination guides, and expert tips for
            your next unforgettable journey.
          </p>
        </div>
      </section>

      <section className="py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-2 flex gap-2">
            <button
              onClick={() => setActiveTab("latest")}
              className={`px-8 py-3 rounded-xl font-semibold transition ${
                activeTab === "latest"
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Latest Blog
            </button>

            <button
              onClick={() => setActiveTab("recent")}
              className={`px-8 py-3 rounded-xl font-semibold transition ${
                activeTab === "recent"
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Recent Blog
            </button>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-zinc-950 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl border border-zinc-800"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-xs font-medium">
                    {post.date}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-amber-400 text-sm font-medium mb-2">
                    {post.category}
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 leading-tight group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-sm">
                      {post.readTime}
                    </span>

                    <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-2xl font-semibold hover:brightness-110 transition-all">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated With VistaVoyage
          </h2>

          <p className="text-zinc-400 text-lg mb-10">
            Get the latest travel blogs, destination tips and exclusive deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-black border border-zinc-700 rounded-2xl text-white focus:outline-none focus:border-amber-400"
            />

            <button className="px-10 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-2xl font-semibold hover:brightness-110 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Blog;