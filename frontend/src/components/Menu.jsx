import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border w-[200px] text-black bg-white z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-2 shadow-md">
      {!user && (
        <Link
          to="/login"
          className="text-sm hover:text-gray-500 cursor-pointer transition-all duration-300"
        >
          <h3>Login</h3>
        </Link>
      )}
      {!user && (
        <Link
          to="/register"
          className="text-sm hover:text-gray-500 cursor-pointer transition-all duration-300"
        >
          <h3>Register</h3>
        </Link>
      )}
      {user && (
        <Link
          to={"/profile/" + user._id}
          className="text-sm hover:text-gray-500 cursor-pointer transition-all duration-300"
        >
          <h3>Profile</h3>
        </Link>
      )}
      {user && (
        <Link
          to="/write"
          className="text-sm hover:text-gray-500 cursor-pointer transition-all duration-300"
        >
          <h3>Write</h3>
        </Link>
      )}
      {user && (
        <Link
          to={"/myblogs/" + user._id}
          className="text-sm hover:text-gray-500 cursor-pointer transition-all duration-300"
        >
          <h3>My Blogs</h3>
        </Link>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-sm hover:text-gray-500 cursor-pointer transition-all duration-300"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
