import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-6 md:px-[200px]">
          <h1 className="text-lg md:text-xl font-extrabold">
            <Link to="/" className="text-white hover:text-gray-300">
              Blog Market
            </Link>
          </h1>
          <h3>
            <Link to="/register" className="text-white hover:text-gray-300">
              Register
            </Link>
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-[80%] md:w-[25%]">
          <h1 className="text-2xl font-bold mb-4">Log in to your account</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 mb-4 focus:outline-none focus:border-black"
            type="text"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 mb-4 focus:outline-none focus:border-black"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-800"
          >
            Log in
          </button>
          {error && (
            <h3 className="text-red-500 text-sm mt-4">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3 mt-4">
            <p>New here?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
