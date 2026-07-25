

import {User} from "./User";
import {useSelector} from "react-redux";
import { useState,useEffect } from "react";
import axios from 'axios';
import { BaseUrl } from "../Utils/const";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Utils/userSlice";

export const EditProfilePage = ()=>{

        const user = useSelector((store)=> store.user);
        const theme = useSelector((store) => store.theme.mode);
        const isDark = theme === "dark";
        const Dispatch = useDispatch();
        const navigate= useNavigate();
        // const [email, setEmail] = useState(user?.email);
        // const [pass, setPass] = useState(user?.password);
        const [firstName, setFirstName] = useState(user?.firstName);
        const [lastName, setLastName] = useState(user?.lastName);
        const [age,setAge] = useState(user?.age);
        const [err,setErr] = useState("");
        const [about,setAbout ] = useState(user?.about);
        const [gender,setGender ] = useState(user?.gender);
        const [city,setCity] = useState(user?.city);
        const [imgUrl,setImgUrl] = useState(user?.imgUrl);
        const dummyUser= {
            firstName: firstName,
            lastName: lastName,
            age: age,
            about:about,
            gender:gender,
            city:city,
            imgUrl:imgUrl

        }
        const handleUpdate= async ()=>{
           try{ const res = await axios.patch(BaseUrl+"/profile/update",{
                firstName:firstName,
                lastName:lastName,
                age:age,
                city:city,
                imgUrl:imgUrl,
                gender:gender,
                about:about
            },{
                withCredentials:true
            });
            // console.log(res);
                // console.log(res.data.user);
                Dispatch(setUser(res.data.user));
                navigate("/profile")
            }catch(err){
                setErr(err.message);
                console.log(err);
            }
            
        }
    
    useEffect(()=>{
        setFirstName(user?.firstName);
        setLastName(user?.lastName);
        setAge(user?.age);
        setGender(user?.gender);
        setAbout(user?.about);
        setCity(user?.city);
        setImgUrl(user?.imgUrl);

    },[user]);

    const inputClass = `w-full rounded-xl px-4 py-2.5 text-sm border transition-all focus:outline-none ${isDark ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-sky-500/50 focus:bg-white/10" : "bg-black/5 border-black/10 text-gray-900 placeholder:text-gray-400 focus:border-sky-500/50 focus:bg-black/5"}`;
    const labelClass = `text-xs font-semibold uppercase tracking-wider mb-1.5 block ${isDark ? "text-gray-400" : "text-gray-500"}`;

    return (
        <div className="px-4 py-12 md:py-16">

            <div className="flex flex-col items-center text-center mb-12">
                <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
                    Customize
                </span>
                <h1 className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Edit Your <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Profile</span>
                </h1>
                <p className={`text-sm max-w-md ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    Changes here update instantly on your public card — see the live preview as you type.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-5xl mx-auto">

               
                <div className={`w-full lg:w-sm rounded-3xl border p-6 md:p-8 backdrop-blur-xl flex flex-col gap-4 transition-colors duration-300 ${isDark ? "bg-white/3 border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.05)]" : "bg-white border-black/5 shadow-lg"}`}>

                    <div className={`text-sm font-semibold pb-3 mb-1 border-b ${isDark ? "text-white border-white/10" : "text-gray-900 border-black/5"}`}>
                        Basic Details
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                        <label className={labelClass}>First Name</label>
                        <input type="string" className={inputClass} placeholder={firstName} onChange={(e)=>{
                            setFirstName(e.target.value);
                        }}/>
                        </div>
                        <div>
                        <label className={labelClass}>Last Name</label>
                        <input type="string" className={inputClass} placeholder={lastName} onChange={(e)=>{
                            setLastName(e.target.value);
                        }}/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                        <label className={labelClass}>Age</label>
                        <input type="Number" className={inputClass} placeholder={age} onChange={(e)=>{
                            setAge(e.target.value);
                        }}/>
                        </div>
                        <div>
                        <label className={labelClass}>Gender</label>
                        <input type="string" className={inputClass} placeholder={gender} onChange={(e)=>{
                            setGender(e.target.value);
                        }}/>
                        </div>
                    </div>

                    <div>
                    <label className={labelClass}>City</label>
                    <input type="string" className={inputClass} placeholder={city} onChange={(e)=>{
                        setCity(e.target.value);
                    }}/>
                    </div>

                    <div className={`text-sm font-semibold pt-2 pb-3 mb-1 border-b ${isDark ? "text-white border-white/10" : "text-gray-900 border-black/5"}`}>
                        About & Media
                    </div>

                    <div>
                    <label className={labelClass}>About</label>
                    <input type="text" className={inputClass} placeholder={about} onChange={(e)=>{
                        setAbout(e.target.value);
                    }}/>
                    </div>
                    <div>
                     <label className={labelClass}>Image URL</label>
                    <input type="string" className={inputClass} placeholder={imgUrl} onChange={(e)=>{
                        setImgUrl(e.target.value);
                    }}/>
                    </div>

                    {err && <p className="text-red-400 text-xs -mt-1">{err}</p>}

                    <button className="mt-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold py-3 rounded-xl transition-colors shadow-[0_0_20px_rgba(14,165,233,0.25)]" onClick={handleUpdate}>
                        Update Details
                    </button>
                </div>

                
                <div className="w-full lg:w-auto flex flex-col items-center gap-3">
                    <span className={`text-xs font-semibold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                        Live Preview
                    </span>
                    {user && <div>         
                    < User user={dummyUser}/>
                    </div>}
                </div>

            </div>
        </div>
    )
}