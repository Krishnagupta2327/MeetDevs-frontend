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
    return (
        <div>
            <div className=" flex text-4xl underline justify-center">
            <h1>Edit Your Profile</h1>
           </div>
          

          
          
            <div className="flex items-start justify-center gap-10">
                <div className="self-start my-10">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


                    <label className="label">First Name</label>
                    <input type="string" className="input" placeholder={firstName} onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}/>
                    <label className="label">Last Name</label>
                    <input type="string" className="input" placeholder={lastName} onChange={(e)=>{
                        setLastName(e.target.value);
                    }}/>
                    <label className="label">Age</label>
                    <input type="Number" className="input" placeholder={age} onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                     <label className="label">Gender</label>
                    <input type="string" className="input" placeholder={gender} onChange={(e)=>{
                        setGender(e.target.value);
                    }}/>
        
                    <label className="label">City</label>
                    <input type="string" className="input" placeholder={city} onChange={(e)=>{
                        setCity(e.target.value);
                    }}/>
                    <label className="label">About</label>
                    <input type="text" className="input" placeholder={about} onChange={(e)=>{
                        setAbout(e.target.value);
                    }}/>
                     <label className="label">ImageUrl</label>
                    <input type="string" className="input" placeholder={imgUrl} onChange={(e)=>{
                        setImgUrl(e.target.value);
                    }}/>
                    {/* {err && <h3>{err}</h3>} */}
                    <button className="btn btn-neutral mt-4" onClick={handleUpdate}>Update Details</button>
                    </fieldset>
                </div>
                <div className=" self-start">
        
                    {user && <div className="self-start">         
                    < User user={dummyUser}/>
                    </div>}
          
                </div>
            </div>
        </div>
    )
} 