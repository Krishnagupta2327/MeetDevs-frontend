
import { useState } from "react";
// import {useState} from "react-route";
import {Link} from "react-router-dom";
import axios from 'axios';
import {BaseUrl} from "../Utils/const";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../Utils/userSlice";

export const SignUp = () => {
  const navigate= useNavigate();
  const Dispatch= useDispatch();
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
    

  return (
    <div>
        <div className="card-body items-center">
            <div className="text-center text-2xl">
            <h2 >SignUp Here!</h2></div>
            <div className="flex mx-10">
    <fieldset className="bg-cyan  border-2 rounded-box w-xs p-4 text">
    <label className="label">First Name</label>
    <input type="text" className="input" placeholder={firstName}  onChange={(e)=>{
    setFirstName(e.target.value);
  }} />
    <label className="label">Last Name</label>
  <input type="text" className="input" placeholder={lastName} onChange={(e)=>{
    setLastName(e.target.value);
  }} />
  <label className="label">Age</label>
  <input type="text" className="input" placeholder={age}  onChange={(e)=>{
    setAge(e.target.value);
  }} />
  <label className="label">Email</label>
  
  <input type="email" className="input" placeholder={email} onChange={(e)=>{
    setEmail(e.target.value);
  }} />
  

  <label className="label">Password</label>
  <input type="text" className="input" placeholder={pass} onChange={(e)=>{
    setPass(e.target.value);
  }}  />
  {
    err && <h1>Error: {err}</h1>
  }

  <button className="btn btn-neutral mt-4 flex mx-auto" onClick={handleSignUp}>SignUp</button>
</fieldset>

</div>
<div className="flex ">
      <h3>Already have an account? </h3>
      <Link to="/login"><h3 className="mx-2 underline"> Login</h3></Link>
      </div>
</div>
</div>
   
  );
};