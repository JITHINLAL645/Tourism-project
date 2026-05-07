import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../component/Admin/AdminSidebar";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex text-white">

      <AdminSidebar handleLogout={handleLogout} />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">Total Users</p>
            <h2 className="text-4xl font-bold">--</h2>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">Blogs Posted</p>
            <h2 className="text-4xl font-bold">--</h2>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">Blocked Users</p>
            <h2 className="text-4xl font-bold">--</h2>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;