

import axios from 'axios';
import {User} from "./User";
import {BaseUrl} from "../Utils/const";
import {useEffect,useState} from "react";
import { useSelector } from "react-redux";

export function FeedPage() {
      const [i,setI] =useState(0);
    const [feed,setFeed] =useState(null);
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";
    useEffect( ()=>{
      const fun = async ()=>{
      try{
        const res = await axios.get(BaseUrl+"/user/feed",{withCredentials:true});
        setFeed(res.data.data);
        console.log(res.data.data);
        console.log(445);
        console.log(feed);
     }catch(err){
      console.log(err);
     }
    }
    fun();
  },[]);;
    

    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-8">
          {feed === null && (
            <div className="flex flex-col items-center gap-4">
              <div className={`w-10 h-10 border-2 border-t-transparent rounded-full animate-spin ${isDark ? "border-sky-400" : "border-sky-600"}`}></div>
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Loading your feed...</p>
            </div>
          )}

          {feed && i < feed.length && <User user= {feed[i]} i={i} setI={setI}/>}

          {feed && i >= feed.length && (
            <div className={`rounded-3xl border p-10 text-center max-w-sm backdrop-blur-xl ${isDark ? "bg-white/3 border-white/10" : "bg-white border-black/5 shadow-lg"}`}>
              <div className="text-4xl mb-4">🎉</div>
              <h2 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>You're all caught up</h2>
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>No more developers to show right now. Check back later for new profiles.</p>
            </div>
          )}
      </div>
    );
  };