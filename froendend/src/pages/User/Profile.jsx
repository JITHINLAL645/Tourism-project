import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../../component/Home/Navbar";
import Footer from "../../component/Home/Footer";
import EditProfileModal from "../../component/Home/EditProfileModal";
import profileImg from "../../assets/profileimg1.png";

function Profile() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [about, setAbout] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setAbout(userData.about || "");
    }
  }, []);

  const handleUpdatedUser = (updatedUser) => {
    setUser(updatedUser);
    setAbout(updatedUser.about || "");
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const saveAbout = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/user/update-profile/${user._id}`,
        {
          name: user.name,
          email: user.email,
          about: about,
        }
      );

      if (res.data.success) {
        toast.success("About Updated");

        setUser(res.data.user);

        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );
      }
    } catch (error) {
      toast.error("Failed To Save About");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 pt-24 pb-16 px-3 md:px-6">
        <div className="w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">

          <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 px-8 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div className="flex items-center gap-6">

              <img
                src={profileImg}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white"
              />

              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {user?.name}
                </h1>

                <p className="text-zinc-400 text-lg mt-2">
                  {user?.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 bg-white text-black rounded-2xl font-semibold hover:bg-zinc-300 transition"
            >
              Edit Profile
            </button>
          </div>

          <div className="px-8 md:px-10 py-10">

            <h2 className="text-3xl font-semibold mb-6">
              About You
            </h2>

            <textarea
              rows="8"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Write something about yourself..."
              className="w-full bg-black border border-zinc-700 rounded-3xl p-6 text-zinc-300 text-lg outline-none resize-none"
            ></textarea>

            <button
              onClick={saveAbout}
              className="mt-5 px-8 py-3 bg-white text-black rounded-2xl font-semibold hover:bg-zinc-300 transition"
            >
              Save About
            </button>

          </div>
        </div>
      </div>

      <Footer />

      {showModal && (
        <EditProfileModal
          user={user}
          closeModal={() => setShowModal(false)}
          updateUser={handleUpdatedUser}
        />
      )}
    </div>
  );
}

export default Profile;