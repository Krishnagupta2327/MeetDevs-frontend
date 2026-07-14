import axios from 'axios';
import {BaseUrl} from "../Utils/const";


export const User = ({user,i,setI})=>{
    const id= user._id;
  
    const sendReq = async ()=>{
        try{
          const res = await axios.post(BaseUrl+`/connectionRequest/send/${id}/interested`,
            {},{withCredentials:true});
            setI(i+1);
      }catch(err){
          console.log(err);
        }
    }
    const ignores = async ()=>{
      try{
        const res = await axios.post(BaseUrl+`/connectionRequest/send/${id}/ignored`,
          {},{withCredentials:true});
          setI(i+1);
    }catch(err){
        console.log(err);
      }
  }
   
    return (
        
        <div className="card bg-base-100 w-96 shadow-sm my-10">
  <figure>
    <img
      src={user&& user.imgUrl} />
  </figure>
  {user && <div className="card-body">
    <h2 className="card-title">
      {user.firstName+" " + user.lastName}
      
      <div className="badge badge-secondary">{user.age}</div>
      <div>{user.gender=="male"?"♂":"♀"}</div>
    </h2>
    
    <h3 className="text-left">📍{user.city}</h3>
    <p>{user.about}</p>
    <div className="card-actions justify-center">
      <div className="badge badge-outline cursor-pointer" onClick={sendReq} >Send Request</div>
      <div className="badge badge-outline cursor-pointer" onClick={ignores} >Ignore</div>
    </div>
  </div>}
</div>
    );
}