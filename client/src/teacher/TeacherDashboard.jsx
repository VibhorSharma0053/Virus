import { useState } from "react";
import TeacherAssignmentCreation from "../components/createAssignment";

const TeacherDashboard = () => {
  const teacherName = localStorage.getItem("userEmail") || "Teacher";
  const [isCreating, setIsCreating] = useState(false);

  const HandelClosingAssignment = () => {
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* Top bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome, {teacherName}
        </h1>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          + Create New Assessment
        </button>
      </div>

      {/* Dashboard content */}
      <div className="text-gray-700">
        <p>This is the teacher dashboard. Add your content here.</p>
        
      </div>

      {/* Modal */}
      {isCreating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh] bg-white">
            <TeacherAssignmentCreation close={HandelClosingAssignment} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
