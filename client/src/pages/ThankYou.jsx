import { Link } from "react-router-dom"
const ThankYou=()=>{
    return(
        <>
        <div className="flex justify-center bg-blue-400 h-screen w-screen">
            <div className="mt-30 bg-white h-90 w-220">
                <h1 className="font-bold text-6xl px-70 py-10">Thank You</h1>
                <p className="text-xl mx-55 mt-2 mb-2">Your submission has been received successfully.</p>
                <p className="text-xl mx-10 pb-10">Thanks for staying productive — even offline!
                     Your data is safe and will sync automatically once you're connected again.</p>
                <Link to="/" className="bg-blue-400 border-2 border-blue-400 text-white shadow-2xl shadow-gray-600 rounded-xs px-2 py-1 mx-90 hover:bg-blue-500">Go to Dashboard</Link>
            </div>

        </div>
        </>
    )
}
export default ThankYou