import  { useState } from "react";
import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-5xl pt-15 md:text-7xl font-bold mb-6 leading-tight">
            Contact <br /> Our Team
          </h1>

          <p className="text-lg md:text-2xl pt-10 text-zinc-300 max-w-3xl mx-auto mb-10">
            Have questions, travel ideas, or need help planning your dream trip?
            We are ready to assist you.
          </p>

          
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

            <div className="space-y-8">

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Office Address</h3>
                  <p className="text-zinc-400 mt-2">
                    Kochi Travel Hub,<br />
                    Kalamassery, Kochi, Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p className="text-zinc-400 mt-2">
                    +91 0101010101 <br />
                    +91 1010101010
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-zinc-400 mt-2">
                    hello@VistaVoyage.com <br />
                    support@VistaVoyage.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-black flex items-center justify-center text-2xl">
                  🕒
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Working Hours</h3>
                  <p className="text-zinc-400 mt-2">
                    Monday - Saturday <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Send Message</h2>
            <p className="text-zinc-400 mb-8">
              Fill in the form and our team will contact you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-amber-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-amber-400"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none focus:border-amber-400"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black border border-zinc-700 rounded-3xl px-5 py-4 outline-none focus:border-amber-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold text-lg hover:brightness-110 transition"
              >
                Send Message →
              </button>

            </form>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Contact;