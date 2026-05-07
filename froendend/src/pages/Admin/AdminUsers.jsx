import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../component/Admin/AdminSidebar";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/users");

      console.log(res.data); // check data in console

      setUsers(res.data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleBlock = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/block-user/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Search
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white flex">
      
      <AdminSidebar />

      <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          All Users
        </h1>

        <input
          type="text"
          placeholder="Search users..."
          className="w-full bg-zinc-900 border border-zinc-700 px-5 py-4 rounded-2xl mb-8 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredUsers.length === 0 ? (
          <p className="text-zinc-400">No Users Found</p>
        ) : (
          <div className="space-y-4">

            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-zinc-400">{user.email}</p>

                  <p className="mt-1">
                    {user.isBlocked ? (
                      <span className="text-red-500">Blocked</span>
                    ) : (
                      <span className="text-green-500">Active</span>
                    )}
                  </p>
                </div>

                <button
                  onClick={() => toggleBlock(user._id)}
                  className={`px-5 py-2 rounded-xl font-semibold ${
                    user.isBlocked
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {user.isBlocked ? "Unblock" : "Block"}
                </button>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;