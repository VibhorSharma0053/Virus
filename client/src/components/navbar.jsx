const Navbar=()=>{
    return(
        <>
        <div className=" fixed bg-white flex h-17 w-screen z-40">
            <h1 className="font-bold text-blue-400 text-2xl mt-5 ml-8 ">OfflineIQ</h1>

            <button>
            <a href="#" className="mt-5 pl-2 pr-2 pt-1 pb-1 rounded-xl border-2 border-black hover:bg-gray-50 font-bold ml-240">login</a>
            </button>

            <button>
            <a href="#" className="mt-5 pl-2 pr-2 pt-1 pb-1 rounded-xl border-2 border-black hover:bg-gray-50 font-bold ml-5">Signup</a>
            </button>
        </div>
        </>
    )
}
export default Navbar;