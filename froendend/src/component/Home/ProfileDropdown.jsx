import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ProfileDropdown({ user, open, setOpen }) {
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
    window.location.reload();
  };

  const goToProfile = () => {
    navigate("/profile"); 
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center"
      >
        {user?.name?.charAt(0).toUpperCase()}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-52 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden">

          <div className="px-4 py-3 border-b border-zinc-800">
            <p className="text-white font-semibold">{user.name}</p>
            <p className="text-zinc-400 text-sm">{user.email}</p>
          </div>

          <button
            onClick={goToProfile}
            className="w-full text-left px-4 py-3 text-white hover:bg-zinc-900 transition"
          >
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 text-red-500 hover:bg-zinc-900 transition"
          >
            Logout
          </button>

        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;