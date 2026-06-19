import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import {BaseUrl} from "../Utils/const";
import { useNavigate } from "react-router-dom";
// import {useSelector} from "react-redux";
import  axios from "axios";
export function Navbar(){
  const Dispatch = useDispatch();
  // const user = useSelector((store)=>store.user);
  const navigate=useNavigate();
const userItems = useSelector((store)=> store.user);

const handleLogOut= async ()=>{
  
  try{
    Dispatch(removeUser());
  const res= await axios.post(BaseUrl+"/logout", {
    firstName:"k"
  },{withCredentials:true});

    console.log(res.data);
    return navigate("/login");

  }catch(err){
    console.log(err);
  }
}
    return (
     
        (
        <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">MeetDevs</a> 
  </div>
  { userItems && <div className="flex gap-2">
    <input type="text" placeholder={( userItems && userItems.firstName )||"Search a developer..."} className="input input-bordered w-24 md:w-auto" />
    <div>
    <ul className="flex mx-2 px-2">
        <li className="mx-1">
          <Link to="/profile" className="justify-between">
            Profile
          </Link>
        </li>
        <li className="mx-1"><a>Settings</a></li>
        <Link to ="/login"> <li >Login</li></Link>
        <li className="mx-1"><button onClick={handleLogOut}> logout</button></li>
      </ul>
    </div>
    <div className="dropdown dropdown-end">
     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {userItems && <img
            
            src= { userItems.imgUrl }/>}
        </div>
      </div>
      
    </div>
  </div>}
</div>)
    )
};