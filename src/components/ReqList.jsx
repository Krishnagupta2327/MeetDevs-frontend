
import {useSelector} from "react-redux";
import {User} from "./User.jsx";
import axios from 'axios';
import { fetchConnections } from "./Connections.jsx";
// import {BaseUrl} from "../Utils/const.js";

export const ReqList  = () =>{

    const connections =  useSelector((store) => store.connections);
    const reviewReq= (id, status)=>{
        try{
        const res= axios.post ("http://localhost:7777"+ `/connectionRequest/review/${id}/${status}`,{},{withCredentials:true});
        fetchConnections();
        }
        catch(err){
            console.log(err);
        }

    }
    return (

//         <div>
//             <h1>Request List</h1>
//             {connections.map((connection, index) => (

//                 <div key={index} className="border p-4 m-2 w-90 flex hover:bg-gray-200 cursor-pointer">
//                    <div className=" ">
//                     <img className="h-40 w-30 rounded-full overflow-hidden" src= {connection.imgUrl} alt="" />
//                    </div>
//                    <div className="flex flex-col justify-center ml-4">
//                     <h1>{connection.firstName}  {connection.lastName} , {connection.age}</h1>
//                     <h2>
// {connection.about}
//                     </h2>
//                    </div>
//                 </div>
//             ))}
//         </div>

<div className="max-w-4xl mx-auto mt-8 px-4">
  <h1 className="text-4xl font-bold text-center mb-8">
    Connection Requests
  </h1>

  <div className="space-y-6">
    {connections.map((connection) => (
      <div
        key={connection._id}
        className="bg-base-100 shadow-xl rounded-2xl p-5 flex items-center gap-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      >
        <img
          src={connection.imgUrl}
          alt={connection.firstName}
          className="w-28 h-28 rounded-full object-cover border-4 border-primary"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold">
            {connection.firstName} {connection.lastName}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {connection.age} Years • {connection.city}
          </p>

          <p className="mt-3 text-gray-700">
            {connection.about}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="btn btn-success" onClick={()=> reviewReq(connection._id,"accepted")}>
            Accept
          </button>

          <button  onClick={()=> reviewReq( connection._id, "rejected")} className="btn btn-outline btn-error">
            Reject
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    );
}