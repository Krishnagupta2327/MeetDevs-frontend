

import {User} from "./User";
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import axios from "axios";
import {BaseUrl} from "../Utils/const";
import {WithEditTag} from "./WithEditTag";

export function Profile() {
    const user = useSelector((store)=> store.user);
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";
   const fun = async ()=>{try{ const res= await axios.get(BaseUrl+"/profile/view",{withCredentials:true});
    }catch(err){
      console.log(err);
    }}

    
    if(!user) return <h1> Not Login!!</h1>

    const WithTag= WithEditTag(User);
    return (
      <div className="flex flex-col items-center px-4 py-12 md:py-16 min-h-[70vh]">

         
          <div className="flex flex-col items-center text-center mb-10 max-w-lg">
            <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
              Your Space
            </span>
            <h1 className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              Your <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Profile</span>
            </h1>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              This is how other developers see you. Keep it sharp, keep it current.
            </p>
          </div>



          
          <div className={`w-full max-w-2xl rounded-3xl border p-6 md:p-10 backdrop-blur-xl transition-colors duration-300 ${isDark ? "bg-white/3 border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.06)]" : "bg-white border-black/5 shadow-lg"}`}>
            {  <div className="flex justify-center w-full">
              < WithTag user={user}/>
            </div>}
          </div>

      </div>
    );
  };