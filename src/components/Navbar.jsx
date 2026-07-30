
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { toggleTheme } from "../Utils/themeSlice";
import {BaseUrl} from "../Utils/const";
import { useNavigate } from "react-router-dom";
// import {useSelector} from "react-redux";
import  axios from "axios";
export function Navbar(){
  const Dispatch = useDispatch();
  // const user = useSelector((store)=>store.user);
  const navigate=useNavigate();
const userItems = useSelector((store)=> store.user);
const theme = useSelector((store) => store.theme.mode);
const isDark = theme === "dark";

const handleLogOut= async ()=>{
  
  try{
    Dispatch(removeUser());
  const res= await axios.post(BaseUrl+"/logout", {
    firstName:"k"
  },{withCredentials:true});

   
    return navigate("/login");

  }catch(err){
    console.log(err);
  }
}
    return (
     
        (
        <div className={`navbar backdrop-blur-xl border-b px-4 md:px-8 py-3 sticky top-0 z-50 transition-colors duration-300 ${isDark ? "bg-[#0a0e1a]/80 border-white/10" : "bg-white/80 border-black/5"}`}>
  <div className="flex-1">
    <Link to="/" className={`text-xl font-bold tracking-tight transition-colors ${isDark ? "text-white hover:text-sky-400" : "text-gray-900 hover:text-sky-600"}`}> Meet<span className="text-sky-500">Devs</span></Link>
  </div>
  { userItems && <div className="flex items-center gap-3">
    <input type="text" placeholder={( userItems && userItems.firstName )||"Search a developer..."} className={`rounded-full px-4 py-2 text-sm w-24 md:w-64 focus:outline-none transition-all border ${isDark ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-sky-500/50 focus:bg-white/10" : "bg-black/5 border-black/10 text-gray-900 placeholder:text-gray-400 focus:border-sky-500/50 focus:bg-black/10"}`} />
    <div>
    <ul className="flex items-center gap-1 md:gap-4 text-sm">
        <li>
          <Link to="/" className={`transition-colors px-2 py-1 rounded-lg ${isDark ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-black/5"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className={`transition-colors px-2 py-1 rounded-lg ${isDark ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-black/5"}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/connections" className={`transition-colors px-2 py-1 rounded-lg ${isDark ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-black/5"}`}>
            Connections
          </Link>
        </li>
        <li>
          <Link to="/requests" className={`transition-colors px-2 py-1 rounded-lg ${isDark ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-black/5"}`}>
            Requests
          </Link>
        </li>
        <li>
        <Link to ="/premium" className={`transition-colors px-2 py-1 rounded-lg ${isDark ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-gray-500 hover:text-gray-900 hover:bg-black/5"}`}>Premium
        </ Link>
        </li>

        <li><button onClick={handleLogOut} className={`px-3 py-1.5 rounded-lg border transition-all ${isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white" : "bg-black/5 hover:bg-black/10 border-black/10 text-gray-600 hover:text-gray-900"}`}> Logout</button></li>

       
        <li>
          <button
            onClick={() => Dispatch(toggleTheme())}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border transition-all ${isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-yellow-300" : "bg-black/5 hover:bg-black/10 border-black/10 text-sky-600"}`}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </li>
      </ul>
    </div>
   

      <Link to="/profile">
       <div className={`w-10 h-10 rounded-full overflow-hidden cursor-pointer ring-2 transition-all ${isDark ? "ring-white/10 hover:ring-sky-500/50" : "ring-black/10 hover:ring-sky-500/50"}`}>
          <img
           className="w-full h-full object-cover"
      src={
        userItems.imgUrl ||
        "https://i.pinimg.com/736x/e6/8c/6e/e68c6e22287fdd8e57c4043902507220.jpg"
      }
      alt="Profile"
    />
  </div>
</Link>
      
    
  </div>}
</div>)
    )
};