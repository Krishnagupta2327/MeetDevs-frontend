
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {BaseUrl} from "../Utils/const";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Utils/userSlice";
import {Link } from 'react-router-dom';

export const  LoginPage=()=> {
  const navigate = useNavigate();
    const [pass, setPass] = useState("Krishna@123");
    const [email, setEmail] = useState("krishna@gmail.com");
    const [err, setErr] =useState("");
    const Dispatch = useDispatch();
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";
    const loginFun = async () =>{
      try{
        const res = await axios.post(BaseUrl+"/login",{
        email: email,
        password: pass
      },{withCredentials:true});
     
      if(res.status==300 || res.status ==500)setErr(res.Error);
    
      // else setErr("");
      Dispatch(setUser(res.data.data));
      return navigate('/');
      // const func= (res)=>{Dispatch(()=>setUser(res))};
      // func(res.data);
      
    }catch(err){
      setErr(err.message);
      setTimeout(()=>{
        setErr("");
       
      },2000);
      console.log("Error" + err);
    }
    };

    const inputClass = `w-full rounded-xl px-4 py-2.5 text-sm border transition-all focus:outline-none ${isDark ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-sky-500/50 focus:bg-white/10" : "bg-black/5 border-black/10 text-gray-900 placeholder:text-gray-400 focus:border-sky-500/50 focus:bg-black/5"}`;
    const labelClass = `text-xs font-semibold uppercase tracking-wider mb-1.5 block ${isDark ? "text-gray-400" : "text-gray-500"}`;
  
    return (
      <div className="flex items-center justify-center min-h-[80vh] px-4">
          <div className={`w-full max-w-sm rounded-3xl border p-8 backdrop-blur-xl transition-colors duration-300 ${isDark ? "bg-white/3 border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.06)]" : "bg-white border-black/5 shadow-lg"}`}>
  <div className="flex flex-col items-center text-center mb-6">
    <h2 className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
      Welcome <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Back</span>
    </h2>
    <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Log in to continue to MeetDevs</p>
  </div>

  <div className="flex flex-col gap-4">

  <div>
  <label className={labelClass}>Email</label>
  <input type="email" className={inputClass} value={email} onChange={
    (e)=>{
        setEmail(e.target.value);
    }
  } />
  </div>

  <div>
  <label className={labelClass}>Password</label>
  <input type="password" className={inputClass} value={pass} onChange={(e)=>{
      setPass(e.target.value);
  }}/>
  </div>

  {err && <p className="text-red-400 text-xs text-center">Error: {err}</p>}

  <button className="mt-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(14,165,233,0.25)]" onClick = {loginFun} >Login</button>
  {/* <h3> Don't have an account? <Link to="/signup" >Sign up</Link></h3> */}

  </div>

      <div className={`flex justify-center gap-1.5 mt-6 pt-5 border-t text-sm ${isDark ? "border-white/10 text-gray-400" : "border-black/5 text-gray-500"}`}>
      <span>Don't have an account?</span>
      <Link to="/signup" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">Sign up</Link>
      </div>
      {/* <Link to="/signup"></Link> */}
  </div>


       
      </ div>
    );
  };