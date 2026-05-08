import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../component/Admin/AdminSidebar";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/admin/users?page=${page}&limit=4`
      );

      setUsers(res.data.users);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const toggleBlock = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/block-user/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen bg-black text-white flex overflow-hidden">
      
      <div className="h-screen">
        <AdminSidebar />
      </div>

      <div className="flex-1 h-screen p-10 flex flex-col">

        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          All Users
        </h1>

        <input
          type="text"
          placeholder="Search users..."
          className="w-full bg-zinc-900 border border-zinc-700 px-5 py-4 rounded-2xl mb-6 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 gap-4 flex-1">

          {filteredUsers.length === 0 ? (
            <p className="text-zinc-400">No Users Found</p>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex justify-between items-center h-[110px]"
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
                  className={`px-5 py-2 rounded-xl font-semibold transition ${
                    user.isBlocked
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {user.isBlocked ? "Unblock" : "Block"}
                </button>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center items-center gap-4 pt-6">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-5 py-2 bg-zinc-800 rounded-xl disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-lg font-semibold">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-5 py-2 bg-zinc-800 rounded-xl disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default AdminUsers;