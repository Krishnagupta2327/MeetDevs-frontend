

import axios from 'axios';
import { useSelector } from 'react-redux';
import {BaseUrl} from "../Utils/const";


export const User = ({user,i,setI})=>{
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";
    const id= user?._id;
  
    const sendReq = async ()=>{
        try{
          const res = await axios.post(BaseUrl+`/connectionRequest/send/${id}/interested`,
            {},{withCredentials:true});
            setI(i+1);
      }catch(err){
          console.log(err);
        }
    }
    const ignores = async ()=>{
      try{
        const res = await axios.post(BaseUrl+`/connectionRequest/send/${id}/ignored`,
          {},{withCredentials:true});
          setI(i+1);
    }catch(err){
        console.log(err);
      }
  }
   
    return (
        
        <div className={`w-full max-w-sm rounded-3xl border overflow-hidden backdrop-blur-xl transition-all duration-300 my-6 ${isDark ? "bg-white/3 border-white/10 hover:border-sky-500/30 shadow-[0_0_30px_rgba(56,189,248,0.05)]" : "bg-white border-black/5 hover:border-sky-300 shadow-md"}`}>
  <figure className="relative">
    <img
      src={user && user.imgUrl}
      className="w-full h-56 object-cover"
      alt={user ? `${user.firstName} ${user.lastName}` : "profile"}
    />
    <div className={`absolute inset-0 bg-linear-to-t ${isDark ? "from-[#0a0e1a] via-transparent to-transparent" : "from-black/20 via-transparent to-transparent"}`}></div>
  </figure>
  {user && <div className="p-6">
    <div className="flex items-center gap-2 flex-wrap mb-1">
      <h2 className={`text-lg font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
        {user.firstName+" " + user.lastName}
      </h2>
      <span className="text-sky-400 text-sm">{user.gender=="male"?"♂":"♀"}</span>
    </div>

    <div className="flex items-center gap-2 mb-3">
      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${isDark ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" : "bg-sky-50 text-sky-600 border border-sky-200"}`}>
        Age {user.age}
      </span>
      {user.city && (
        <span className={`text-xs flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          📍 {user.city}
        </span>
      )}
    </div>

    <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
      {user.about}
    </p>

    <div className="flex items-center gap-3">
      <button
        onClick={sendReq}
        className="flex-1 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
      >
        Send Request
      </button>
      <button
        onClick={ignores}
        className={`flex-1 text-sm font-semibold py-2.5 rounded-xl border transition-colors ${isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white" : "bg-black/5 hover:bg-black/10 border-black/10 text-gray-600 hover:text-gray-900"}`}
      >
        Ignore
      </button>
    </div>
  </div>}
</div>
    );
}