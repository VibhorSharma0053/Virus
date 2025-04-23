import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password" && value.length >= 8) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // e.g., "Signup successful"
        navigate("/login");
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (err) {
      setError("Something went wrong. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-contain bg-zinc-200">
      <div className="w-full max-w-md bg-white/50 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          OfflineIQ
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-black w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>-- Select Role --</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <div className="flex justify-between space-x-4 mt-3">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:bg-blue-400 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;