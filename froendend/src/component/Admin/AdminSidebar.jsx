import { useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");
    sessionStorage.clear();

    navigate("/login");
  };

  return (
    <div className="w-72 bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col justify-between min-h-screen">
      
      <div>
        <div className="flex items-center gap-3 mb-12">
          <img
            src="/tourismicon1.png"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />

          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            VistaVoyage
          </h2>
        </div>

        <div className="space-y-4">

          <button
            onClick={() => navigate("/admindashboard")}
            className="w-full text-left px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition"
wwwwwwwwwww          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/adminusers")}
            className="w-full text-left px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            All Users
          </button>

        </div>
      </div>

      <button
        onClick={handleLogout}
        className="w-full px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 transition font-semibold"
      >
        Logout
      </button>

    </div>
  );
}

export default AdminSidebar;