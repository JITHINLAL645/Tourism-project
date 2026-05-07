import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginImg from "../../assets/loginimg1.jpg";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Validation */
    if (!formData.email || !formData.password) {
      return toast.error("All fields required", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      /* Save Data */
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.dispatchEvent(new Event("storage"));

      /* Success Toast */
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
      });

      setTimeout(() => {
        if (res.data.user.isAdmin === true) {
          navigate("/admindashboard");
        } else {
          navigate("/");
        }
      }, 1600);

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed",
        {
          position: "top-right",
          autoClose: 1500,
          theme: "dark",
        }
      );
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-6xl h-[92vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex">

        <div className="hidden lg:block w-1/2 relative overflow-hidden">

          <img
            src={loginImg}
            alt="Login"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55"></div>

          <div className="absolute bottom-12 left-12 z-10">

            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full border border-white/20 text-sm tracking-wider text-white mb-6 backdrop-blur-md">
              WELCOME BACK
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white mb-5">
              Explore <br /> New Adventures
            </h1>

            <p className="text-zinc-300 text-lg max-w-md leading-relaxed">
              Login and continue your travel experience with amazing destinations worldwide.
            </p>

          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-black flex items-center justify-center px-8 lg:px-14">

          <div className="w-full max-w-md">

            <div className="mb-8">

              <h2 className="text-4xl font-bold text-white mb-3">
                Login
              </h2>

              <p className="text-zinc-400">
                Enter your credentials to continue
              </p>

              <div className="flex gap-6 mt-6 text-lg">

                <Link
                  to="/signup"
                  className="text-zinc-500 hover:text-white transition"
                >
                  Signup
                </Link>

                <span className="text-amber-400 font-semibold border-b-2 border-amber-400 pb-1">
                  Login
                </span>

              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 px-5 py-3 rounded-2xl outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 px-5 py-3 rounded-2xl outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-amber-400 transition"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl font-semibold text-black text-lg bg-gradient-to-r from-amber-400 to-orange-500 hover:brightness-110 transition"
              >
                Login
              </button>

            </form>

            <p className="text-center text-zinc-500 mt-6">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-amber-400 font-medium hover:underline"
              >
                Signup
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;