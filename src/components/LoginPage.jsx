import { useState } from "react";
import axios from "axios";
export function LoginPage() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const loginFun = async () =>{
      console.log("Data is fetching");
      try{
        const res = await axios.post("http://localhost:7777/login",{
        email: email,
        password: pass
      });
      
      console.log(res);
    }catch(err){
      console.log("errror" + err);
    }
    console.log("data fetched");
    };
    return (
      <>
          <div className="card bg-cyan w-96 flex mx-150 justify-center my-25">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Login here!</h2>
    
    <fieldset className="fieldset rounded-box w-xs border p-4">
  

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

  <button className="btn btn-neutral mt-4" onClick = {loginFun} >Login</button>
</fieldset>
  </div>
</div>


       
      </>
    );
  };
  