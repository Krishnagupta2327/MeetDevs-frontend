import axios from 'axios';
import {User} from "./User";
import {BaseUrl} from "../Utils/const";
import {useEffect,useState} from "react";

export function FeedPage() {
      const [i,setI] =useState(0);
    const [feed,setFeed] =useState(null);
    useEffect( ()=>{
      const fun = async ()=>{
      try{
        const res = await axios.get(BaseUrl+"/user/feed",{withCredentials:true});
        setFeed(res.data.data);
        console.log(res.data.data);
        console.log(445);
        console.log(feed);
     }catch(err){
      console.log(err);
     }
    }
    fun();
  },[]);;
    

    return (
      <div className="text-2xl flex justify-center my-3">
          {feed  && i< feed.length && <User user= {feed[i]} i={i} setI={setI}/>}
      </div>
    );
  };
  