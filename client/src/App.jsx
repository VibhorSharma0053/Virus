import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Nav from "./pages/navbar.jsx";

const App = () => {
  return (
    <><Nav/>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          <Route path="/" element={<Home/>} />
          <Route path="/account-access" element={<Account/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
