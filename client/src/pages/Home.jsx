import img1 from "../assets/img1.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="relative">
        <img src={img1} alt="Home" className="w-500 h-screen px-10 absolute" />
        <div className="absolute t-10 flex items-center h-100 bg-gray-300/80 w-280 mx-20 my-30">
          <h1 className="text-2xl ml-9 mt-20 font-bold">
          Submit Assignments Anytime, Anywhere — Even Without Internet 📤
            <p className="text-xl pt-4 font-serif w-[85%] font-normal">
            Seamless assignment sharing designed for teachers and students. Even without the internet, your work is saved and synced automatically.
            </p>
            <Link to="/login" className="bg-blue-400 border-2 border-blue-400 text-white shadow-2xl shadow-gray-600 rounded-xs px-2 py-1 mx-115 hover:bg-blue-500">
            Get Started 
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};
export default Home;
