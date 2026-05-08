import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../component/Admin/AdminSidebar";

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [blockedUsers, setBlockedUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/users");

      const users = res.data.users || res.data;

      const total = users.length;
      const blocked = users.filter((user) => user.isBlocked).length;
      const active = total - blocked;

      setTotalUsers(total);
      setBlockedUsers(blocked);
      setActiveUsers(active);
    } catch (error) {
      console.log("Dashboard Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="h-screen bg-black flex text-white overflow-hidden">

      <div className="h-screen">
        <AdminSidebar />
      </div>

      <div className="flex-1 p-10 overflow-hidden">

        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8  transition">
            <p className="text-zinc-400 mb-3 text-lg">Total Users</p>
            <h2 className="text-5xl font-bold text-white">{totalUsers}</h2>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8  transition">
            <p className="text-zinc-400 mb-3 text-lg">Active Users</p>
            <h2 className="text-5xl font-bold text-white">{activeUsers}</h2>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8  transition">
            <p className="text-zinc-400 mb-3 text-lg">Blocked Users</p>
            <h2 className="text-5xl font-bold text-white">{blockedUsers}</h2>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;