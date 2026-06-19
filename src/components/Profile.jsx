import {User} from "./User";
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import axios from "axios";
import {BaseUrl} from "../Utils/const";


export function Profile() {
    const user = useSelector((store)=> store.user);
   const fun = async ()=>{try{ const res= await axios.get(BaseUrl+"/profile/view",{withCredentials:true});
    console.log(res);}catch(err){
      console.log(err);
    }}

    
    // if(!user) return <h1> Not Login!!</h1>


    return (
      <div className=" flex-col justify-center  text-center items-center">
          <div className="mb-8  border-y flex ">
            <div className="text-2xl mx-5"><h1>Your Profile</h1></div>
            <div  className="flex">
              <ul className="flex mx-4 px-4">
                <Link to ="/">
                  <li className="flex mx-4 px-4 ">Home</li>
                </Link>
                <Link to ="/">
                  <li>Edit Profile</li>
                </Link>

              </ul>
            </div>
          </div>
          {/* {fun()} */}
          {  <div className="justify-self-center">
            
            {console.log(2342)}
            {console.log(user)}
            <User  user={user}/>
            </div>}
          {/* {console.log(user)} */}
      </div>
    );
  };
  