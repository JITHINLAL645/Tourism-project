import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../assets/loginimg1.jpg";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      return setError("All fields are required");
    }

    if (formData.password.length < 6) {
      return setError("Password must be minimum 6 characters");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.dispatchEvent(new Event("storage"));

      toast.success("Signup Successful!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/");
      }, 1600);

    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-6xl h-[92vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex">

        <div className="hidden lg:block w-1/2 relative overflow-hidden">

          <img
            src={loginImg}
            alt="Signup"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute bottom-12 left-12 z-10">

            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full border border-white/20 text-sm tracking-wider text-white mb-6 backdrop-blur-md">
              START YOUR JOURNEY
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white mb-5">
              Discover <br /> The World
            </h1>

            <p className="text-zinc-300 text-lg max-w-md leading-relaxed">
              Join thousands of travelers and explore unforgettable destinations around the world.
            </p>

          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-black flex items-center justify-center px-8 lg:px-14">

          <div className="w-full max-w-md">

            <div className="mb-8">

              <h2 className="text-4xl font-bold text-white mb-3">
                Create Account
              </h2>

              <p className="text-zinc-400">
                Enter your details to continue
              </p>

              <div className="flex gap-6 mt-6 text-lg">

                <span className="text-amber-400 font-semibold border-b-2 border-amber-400 pb-1">
                  Signup
                </span>

                <Link
                  to="/login"
                  className="text-zinc-500 hover:text-white transition"
                >
                  Login
                </Link>

              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {error && (
                <p className="bg-red-500/10 border border-red-500/20 text-red-400 text-center py-3 rounded-xl text-sm">
                  {error}
                </p>
              )}

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-5 py-3 rounded-2xl outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-5 py-3 rounded-2xl outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-5 py-3 rounded-2xl outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-5 py-3 rounded-2xl outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl font-semibold text-black text-lg bg-gradient-to-r from-amber-400 to-orange-500 hover:brightness-110 transition"
              >
                Create Account
              </button>

            </form>

            <p className="text-center text-zinc-500 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-amber-400 font-medium hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;