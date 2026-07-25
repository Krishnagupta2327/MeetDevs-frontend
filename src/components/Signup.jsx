

import { useState } from "react";
// import {useState} from "react-route";
import {Link} from "react-router-dom";
import axios from 'axios';
import {BaseUrl} from "../Utils/const";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../Utils/userSlice";

export const SignUp = () => {
  const navigate= useNavigate();
  const Dispatch= useDispatch();
  const theme = useSelector((store) => store.theme.mode);
  const isDark = theme === "dark";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age,setAge] = useState("");
    const [err,setErr] = useState("");
    const [about,setAbout ] = useState("");
    const [imgUrl,setImgUrl] = useState("");

    const handleSignUp = async()=>{
       try {const data= {
            firstName:firstName,
            lastName:lastName,
            age: age,
            email:email,
            password: pass
        }

        const res = await axios.post(BaseUrl+"/signup",data,{withcredentials:true});
       
        if(res.status==201) {
          try{
            const res = await axios.post(BaseUrl+"/login",{
            email: email,
            password: pass
          },{withCredentials:true});
         
          if(res.status==300 || res.status ==500)setErr(res.Error);
          console.log("Error"+err);
          // else setErr("");
          Dispatch(setUser(res.data.data));
          return navigate('/');
          // const func= (res)=>{Dispatch(()=>setUser(res))};
          // func(res.data);
          
        }catch(err){
          setErr(err.message);
          setTimeout(()=>{
            setErr("");
         ;
          },2000);
          console.log("Error" + err);
        }
        }
}catch(err){
    setErr(err.message);
    setTimeout(()=>{
        setErr("");
    },2000);


}};

    const inputClass = `w-full rounded-xl px-4 py-2.5 text-sm border transition-all focus:outline-none ${isDark ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-sky-500/50 focus:bg-white/10" : "bg-black/5 border-black/10 text-gray-900 placeholder:text-gray-400 focus:border-sky-500/50 focus:bg-black/5"}`;
    const labelClass = `text-xs font-semibold uppercase tracking-wider mb-1.5 block ${isDark ? "text-gray-400" : "text-gray-500"}`;
    

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 py-8">
        <div className={`w-full max-w-sm rounded-3xl border p-8 backdrop-blur-xl transition-colors duration-300 ${isDark ? "bg-white/3 border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.06)]" : "bg-white border-black/5 shadow-lg"}`}>
            <div className="flex flex-col items-center text-center mb-6">
            <h2 className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Create Your <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Account</span>
            </h2>
            <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>Join the MeetDevs community</p>
            </div>

    <div className="flex flex-col gap-4">

    <div className="grid grid-cols-2 gap-3">
    <div>
    <label className={labelClass}>First Name</label>
    <input type="text" className={inputClass} placeholder={firstName}  onChange={(e)=>{
    setFirstName(e.target.value);
  }} />
    </div>
    <div>
    <label className={labelClass}>Last Name</label>
  <input type="text" className={inputClass} placeholder={lastName} onChange={(e)=>{
    setLastName(e.target.value);
  }} />
  </div>
  </div>

  <div>
  <label className={labelClass}>Age</label>
  <input type="text" className={inputClass} placeholder={age}  onChange={(e)=>{
    setAge(e.target.value);
  }} />
  </div>

  <div>
  <label className={labelClass}>Email</label>
  <input type="email" className={inputClass} placeholder={email} onChange={(e)=>{
    setEmail(e.target.value);
  }} />
  </div>

  <div>
  <label className={labelClass}>Password</label>
  <input type="text" className={inputClass} placeholder={pass} onChange={(e)=>{
    setPass(e.target.value);
  }}  />
  </div>

  {
    err && <p className="text-red-400 text-xs text-center">Error: {err}</p>
  }

  <button className="mt-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors shadow-[0_0_20px_rgba(14,165,233,0.25)]" onClick={handleSignUp}>SignUp</button>
</div>

<div className={`flex justify-center gap-1.5 mt-6 pt-5 border-t text-sm ${isDark ? "border-white/10 text-gray-400" : "border-black/5 text-gray-500"}`}>
      <span>Already have an account?</span>
      <Link to="/login" className="text-sky-400 font-semibold hover:text-sky-300 transition-colors">Login</Link>
      </div>
</div>
</div>
   
  );
};