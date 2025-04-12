import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password" && value.length > 8) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError("Password must be at least 8 Characters long.");
    } else {
        setError("")
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-contain bg-zinc-200">
      <div className="w-full max-w-md bg-white/50 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Hire Ready
        </h2>
        <div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="text-blue-500 w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-2 border-gray-300 mb-2 text-blue-500 w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="flex justify-between space-x-4 mt-3">
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:bg-blue-400"
              onClick={handleSubmit}
            >
              Login
            </button>

          </div>
        </div>
        <p className="text-center mt-4 text-black">
          Do not have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
