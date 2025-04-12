import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";

import Home from "./pages/Home";
import Account from "./pages/Account";
import TeacherAssignmentCreation from "./components/createAssignment";

import StudentTest from "./student/StudentDashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          <Route path="/" element={<Home/>} />
          <Route path="/account-access" element={<Account/>}/>

          <Route path="/student" element={<StudentTest />} />
          <Route path="/teacher" element={<TeacherAssignmentCreation />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
