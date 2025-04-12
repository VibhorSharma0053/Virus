import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between text-lg px-10 h-15 items-center">
        <h1 className="text-3xl font-bold text-blue-400">OfflineIQ</h1>

        <div className="flex gap-4 pr-4">
            <Link to="/login" className="">Login</Link>
            <Link to="/signup" className="">Sign Up</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;

{
  /* <div className=" fixed bg-white flex h-17 w-screen z-40">
<h1 className="font-bold text-blue-400 text-2xl mt-5 ml-8 ">
  OfflineIQ
</h1>

<button>
  <Link to="/account" className="">
    Login
  </Link>
</button>

<button>
  <a
    href="#"
    className="mt-5 pl-2 pr-2 pt-1 pb-1 rounded-xl border-2 border-black hover:bg-gray-50 font-bold ml-5"
  >
    Signup
  </a>
</button>
</div> */
}
