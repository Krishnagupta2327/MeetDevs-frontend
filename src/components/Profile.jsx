import {User} from "./User";
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import axios from "axios";
import {BaseUrl} from "../Utils/const";
import {WithEditTag} from "./WithEditTag";

export function Profile() {
    const user = useSelector((store)=> store.user);
   const fun = async ()=>{try{ const res= await axios.get(BaseUrl+"/profile/view",{withCredentials:true});
    console.log(res);}catch(err){
      console.log(err);
    }}

    
    // if(!user) return <h1> Not Login!!</h1>

    const WithTag= WithEditTag(User);
    return (
      <div className=" flex-col justify-center text-center items-center">
          <div className=" flex text-4xl underline justify-center">
            <h1>Your Profile</h1>
          </div>
          {/* {fun()} */}
          {  <div className="justify-self-center">
            
            {console.log(2342)}
            {console.log(user)}
            < WithTag user={user}/>
            </div>}
          {/* {console.log(user)} */}
      </div>
    );
  };
  