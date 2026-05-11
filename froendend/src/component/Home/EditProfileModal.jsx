import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function EditProfileModal({ user, closeModal, updateUser }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/user/update-profile/${user._id}`,
        {
          ...formData,
          about: user.about || "",
        }
      );

      if (res.data.success) {
        toast.success("Profile Updated");

        updateUser(res.data.user);

        closeModal();
      }
    } catch (error) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

      <div className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Edit Profile
          </h2>

          <button
            onClick={closeModal}
            className="text-zinc-400 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-3 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-3 text-white outline-none"
          />

          <button
            onClick={handleSave}
            className="w-full bg-white text-black py-3 rounded-2xl font-semibold hover:bg-zinc-300 transition"
          >
            Save Changes
          </button>

        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;