
import {Navbar} from "./Navbar";
import { Footer } from "./Footer";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { setUser } from "../Utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import {Outlet} from "react-router-dom";
import {BaseUrl} from "../Utils/const.js";

export function Body() {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const authfun=  async ()=>{
   try{ 
      const res= await axios.get(BaseUrl+"/profile/view",{withCredentials:true});
    
      
       dispatch(setUser(res.data));
      
    }catch(err){
      console.log(err);
      navigate('/login');
  }
}
useEffect(()=>{authfun()}, []);
    return (
      <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
    );
  };
  