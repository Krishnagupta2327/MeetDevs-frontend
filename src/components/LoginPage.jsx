import { useState } from "react";
import { useDispatch } from "react-redux";
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
    const loginFun = async () =>{
      try{
        const res = await axios.post(BaseUrl+"/login",{
        email: email,
        password: pass
      },{withCredentials:true});
      console.log(res.data.data);
      if(res.status==300 || res.status ==500)setErr(res.Error);
      console.log("new j "+err);
      // else setErr("");
      Dispatch(setUser(res.data.data));
      return navigate('/');
      // const func= (res)=>{Dispatch(()=>setUser(res))};
      // func(res.data);
      
    }catch(err){
      setErr(err.message);
      setTimeout(()=>{
        setErr("");
        // console.log("hiik");
      },2000);
      console.log("errrorkri" + err);
    }
    };
  
    return (
      <div>
          <div className="card bg-cyan w-96 flex mx-auto justify-center my-25">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl ">Login here!</h2>
    
    <fieldset className="fieldset rounded-box w-xs border-2 p-4">
  

  <label className="label">Email</label>
  <input type="email" className="input" value={email} onChange={
    (e)=>{
        setEmail(e.target.value);
    }
  } />

  <label className="label">Password</label>
  <input type="password" className="input" value={pass} onChange={(e)=>{
      setPass(e.target.value);
  }}/>
  {err && <h2>Error :{err}</h2>}
  <button className="btn btn-neutral mt-4" onClick = {loginFun} >Login</button>
  {/* <h3> Don't have an account? <Link to="/signup" >Sign up</Link></h3> */}

</fieldset>
      <div className="flex m-1">
      <h3>Don't have an account? </h3>
      <Link to="/signup"><h3 className="mx-2 underline"> SignUp</h3></Link>
      </div>
      {/* <Link to="/signup"></Link> */}
  </div>
</div>


       
      </ div>
    );
  };
  