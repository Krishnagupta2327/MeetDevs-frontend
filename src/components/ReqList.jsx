

import {useSelector} from "react-redux";
import {User} from "./User.jsx";
import axios from 'axios';
import { fetchConnections } from "./Connections.jsx";
import {BaseUrl} from "../Utils/const.js";

export const ReqList  = () =>{

    const connections =  useSelector((store) => store.connections);
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";
    const reviewReq= (id, status)=>{
        try{
        const res= axios.post (BaseUrl+ `/connectionRequest/review/${id}/${status}`,{},{withCredentials:true});
        fetchConnections();
        }
        catch(err){
            console.log(err);
        }

    }
    return (



<div className="max-w-3xl mx-auto px-4 py-12 md:py-16">

  <div className="flex flex-col items-center text-center mb-10">
    <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
      Requests
    </span>
    <h1 className={`text-3xl md:text-4xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
      Connection <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Requests</span>
    </h1>
    <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
      {connections?.length || 0} pending {connections?.length === 1 ? "request" : "requests"}
    </p>
  </div>

  <div className="flex flex-col gap-5">
    {connections.map((connection) => (
      <div
        key={connection._id}
        className={`rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 ${isDark ? "bg-white/3 border-white/10 hover:border-sky-500/30 hover:bg-white/5" : "bg-white border-black/5 hover:border-sky-300 shadow-md"}`}
      >
        <div className="flex items-center gap-5">
          <img
            src={connection.imgUrl}
            alt={connection.firstName}
            className={`w-20 h-20 rounded-full object-cover ring-2 ${isDark ? "ring-white/10" : "ring-black/10"}`}
          />

          <div className="flex-1">
            <h2 className={`text-lg font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              {connection.firstName} {connection.lastName}
            </h2>
            <p className={`text-sm mt-0.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              {connection.age} years • {connection.city}
            </p>
          </div>
        </div>

        <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {connection.about}
        </p>

        <div className="flex items-center gap-3 mt-5">
          <button
            className="flex-1 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
            onClick={()=> reviewReq(connection._id,"accepted")}
          >
            ✓ Accept
          </button>

          <button
            onClick={()=> reviewReq( connection._id, "rejected")}
            className={`flex-1 text-sm font-semibold py-2.5 rounded-xl border transition-colors ${isDark ? "bg-white/5 hover:bg-white/10 border-white/10 text-gray-300 hover:text-white" : "bg-black/5 hover:bg-black/10 border-black/10 text-gray-600 hover:text-gray-900"}`}
          >
            ✕ Ignore
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    );
}