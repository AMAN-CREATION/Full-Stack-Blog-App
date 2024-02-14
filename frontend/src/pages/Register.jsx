import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
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
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-[80%] md:w-[25%]">
          <h1 className="text-2xl font-bold mb-4">Create an account</h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 mb-4 focus:outline-none focus:border-black"
            type="text"
            placeholder="Enter your username"
          />
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
            onClick={handleRegister}
            className="w-full px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-800"
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-500 text-sm mt-4">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3 mt-4">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
