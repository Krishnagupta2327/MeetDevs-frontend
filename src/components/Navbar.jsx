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

   
    return navigate("/login");

  }catch(err){
    console.log(err);
  }
}
    return (
     
        (
        <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl"> MeetDevs</Link>
  </div>
  { userItems && <div className="flex gap-2">
    <input type="text" placeholder={( userItems && userItems.firstName )||"Search a developer..."} className="input input-bordered w-24 md:w-auto" />
    <div className="my-2">
    <ul className="flex mx-2 px-2">
        <li className="mx-1">
          <Link to="/" className="justify-between">
            Home
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/profile" className="justify-between">
            Profile
          </Link>
        </li>
        <Link to ="/login"> <li >Login</li></Link>
        <li className="mx-1"><button onClick={handleLogOut}> logout</button></li>
      </ul>
    </div>
   

      <Link to="/profile">
       <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <img
           className="w-full h-full object-cover"
      src={
        userItems.imgUrl ||
        "https://i.pinimg.com/736x/e6/8c/6e/e68c6e22287fdd8e57c4043902507220.jpg"
      }
      alt="Profile"
    />
  </div>
</Link>
      
    
  </div>}
</div>)
    )
};