import { Link } from "react-router-dom"

const Account=()=>{
    return(
        <>
        <div className="flex items-center h-130 bg-white">
            <div className="w-7xl">
            <h1 className="font-bold text-4xl pl-65 italic">Teacher</h1>
            <p className="text-gray-700 pt-5 pl-5 font-sans">Simplify assignment management with an intelligent offline-first platform.
                Create and distribute tasks, track student progress, and review submissions 
                seamlessly — even in low-connectivity environments.</p>
                <button className="bg-black text-white border-2 px-2 py-1 ml-75 mt-10">Login</button>
            </div>

            <div class="hidden md:block w-1.5 bg-gray-300 h-64 mx-6 "></div> 

            <div className="w-7xl">
            <h1 className="font-bold text-4xl pl-50 italic">Students</h1>
            <p className="text-gray-700 pt-5 pl-5 font-sans">
            Stay on track, anytime, anywhere. Complete assignments without internet access and sync your
            progress automatically when you're back online. Reliable, fast, and stress-free.</p>
            <button className="bg-black text-white border-2 px-2 py-1 ml-65 mt-10">Login</button>
            </div>
            
        </div>
        <div className="flex">
        <h1 className="text-black ml-60 mr-1">Don't have an account?</h1>
        <Link to="/signup" className="text-blue-500">
            Sign Up
        </Link>
        <h1 className="text-black ml-95 mr-1">Don't have an account?</h1>
        <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
        </>
    )
}
export default Account