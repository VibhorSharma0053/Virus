import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";

import Home from "./pages/Home";
import Account from "./pages/Account";

import Nav from "./pages/navbar.jsx";
import ThankYou from "./pages/ThankYou.jsx";



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

          <Route path="/thankyou" element={<ThankYou />} /> 


          <Route path="/student" element={<StudentTest />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
