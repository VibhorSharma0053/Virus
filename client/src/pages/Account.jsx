import { Link } from "react-router-dom";

import NavBar from "../components/navbar";

const Account = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center h-130 bg-white px-7">
        <div className="w-7xl">
          <h1 className="font-bold text-4xl pl-65 italic">For Teachers</h1>
          <p className="text-gray-700 pt-5 pl-5 font-sans">
            Simplify assignment management with an intelligent offline-first
            platform. Create and distribute tasks, track student progress, and
            review submissions seamlessly — even in low-connectivity
            environments.
          </p>
          <Link to="/login" className="bg-black text-white text-xl border-2 px-2 py-1 ml-75 mt-10">
            Login
          </Link>
        </div>

        <div class="hidden md:block w-1.5 bg-gray-300 h-64 mx-6 "></div>

        <div className="w-7xl">
          <h1 className="font-bold text-4xl pl-50 italic">For Students</h1>
          <p className="text-gray-700 pt-5 pl-5 font-sans">
            Stay on track, anytime, anywhere. Complete assignments without
            internet access and sync your progress automatically when you're
            back online. Reliable, fast, and stress-free.
          </p>
          <Link to="/login" className="bg-black text-white text-xl border-2 px-2 py-1 ml-65 mt-9">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
export default Account;
