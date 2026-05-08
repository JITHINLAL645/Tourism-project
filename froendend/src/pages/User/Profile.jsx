import { useEffect, useState } from "react";
import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";
import { toast } from "react-toastify";

function Profile() {
  const [user, setUser] = useState(null);
  const [about, setAbout] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const savedAbout = localStorage.getItem("about");
    if (savedAbout) {
      setAbout(savedAbout);
    }
  }, []);

  const handleAboutSave = () => {
    localStorage.setItem("about", about);
    toast("About updated successfully!");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 pt-24 pb-16 px-3 md:px-6">
        <div className="w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">

          <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-4xl font-bold">
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  {user?.name || "User Name"}
                </h1>
                <p className="text-zinc-400 mt-1">
                  {user?.email || "No Email"}
                </p>
              </div>
            </div>

            <div>
              <span className="px-5 py-2 rounded-full bg-green-500/20 text-green-400 font-semibold">
                Active
              </span>
            </div>
          </div>

          <div className="p-6 md:p-10">

            <h2 className="text-2xl font-semibold mb-5">About You</h2>

            <textarea
              rows="8"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Write something about yourself..."
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 outline-none resize-none focus:border-white"
            ></textarea>

            <button
              onClick={handleAboutSave}
              className="mt-5 px-8 py-3 bg-white text-black rounded-2xl font-semibold hover:bg-zinc-300 transition"
            >
              Save About
            </button>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;