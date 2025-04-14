import { useNavigate } from "react-router-dom";
import StudentTest from "./StudentTest";


const StudentDashboard = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail") || "Student";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome, {userEmail}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 active:bg-red-400 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Dashboard content */}
      <div className="text-gray-700">
        <StudentTest/>
        {/* You can add a table or list of assignments here */}
      </div>
    </div>
  );
};

export default StudentDashboard;