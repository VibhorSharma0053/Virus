import { Link } from "react-router-dom"
const Nav=()=>{
    return(
        <>
        <div className=" fixed bg-white flex h-17 w-screen z-40">
            <h1 className="font-bold text-blue-400 text-2xl mt-5 ml-8 ">OfflineIQ</h1>

            <Link to="/login" className="mt-5 pl-2 pr-2 pt-1 pb-1 rounded-xl border-2 border-black hover:bg-gray-50 font-bold ml-240">
            login
            </Link>

            <Link to="/signup" className="mt-5 pl-2 pr-2 pt-1 pb-1 rounded-xl border-2 border-black hover:bg-gray-50 font-bold ml-5">
                Signup
            </Link>
        </div>
        </>
    )
}
export default Nav