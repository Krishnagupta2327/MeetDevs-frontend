
import {Navbar} from "./Navbar";
import { Footer } from "./Footer";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { setUser } from "../Utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import {Outlet} from "react-router-dom";
import {BaseUrl} from "../Utils/const.js";

export function Body() {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const theme = useSelector((store) => store.theme.mode);
  const authfun=  async ()=>{
   try{ 
      const res= await axios.get(BaseUrl+"/profile/view",{withCredentials:true});
      dispatch(setUser(res.data));
    }
    catch(err){
      console.log(err);
      navigate('/login');
  }
}
useEffect(()=>{authfun()}, []);

const isDark = theme === "dark";

    return (
      <div className={`min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-300 ${isDark ? "bg-[#0a0e1a]" : "bg-[#f5f7fb]"}`}>
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-125 h-125 rounded-full blur-3xl ${isDark ? "bg-sky-600/10" : "bg-sky-400/20"}`}></div>
        <div className={`absolute top-1/2 -right-40 w-125 h-125 rounded-full blur-3xl ${isDark ? "bg-blue-700/10" : "bg-purple-300/20"}`}>
        </div>
      </div>

      <Navbar />

      <main className="grow relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
    );
  };