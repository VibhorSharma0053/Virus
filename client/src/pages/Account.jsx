import Nav from "../components/navbar"
const Account=()=>{
    return(
        <>
        <Nav />
        <div className="flex items-center min-h-screen bg-white">
            <div className="w-7xl">
            <h1 className="font-bold text-4xl pl-70 italic">Teacher</h1>
            <p className="text-gray-700 pt-5 pl-5 font-sans">Simplify assignment management with an intelligent offline-first platform.
                Create and distribute tasks, track student progress, and review submissions 
                seamlessly — even in low-connectivity environments.</p>
                <button className="bg-black text-white border-2 px-2 py-1 ml-75 mt-10">Login</button>
            </div>
            <div class="hidden md:block w-px bg-gray-300 h-64 mx-6 "></div> 

            <div className="w-7xl">
            <h1 className="font-bold text-4xl pl-50 italic">Students</h1>
            <p className="text-gray-700 pt-5 pl-5 font-sans">
            Stay on track, anytime, anywhere. Complete assignments without internet access and sync your
            progress automatically when you're back online. Reliable, fast, and stress-free.</p>
            <button className="bg-black text-white border-2 px-2 py-1 ml-75 mt-10">Login</button>
            </div>
            <h1></h1>
        </div>
        </>
    )
}
export default Account