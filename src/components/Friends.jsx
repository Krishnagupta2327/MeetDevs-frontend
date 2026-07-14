import axios from "axios";
import { useEffect, useState } from "react";
import {BaseUrl} from "../Utils/const.js";
// import { store } from "../Utils/store.js";
import { setFriend } from "../Utils/FreindSlice.js";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import {FriendsList} from "./FriendsList.jsx";

export const Friends = ()=>{ 
    const connections =  useSelector((store) => store.friends);
    const dispatch = useDispatch();
    const fetchConnections = async () =>{
        try{
            const res = await axios.get(BaseUrl+ "/user/connections",{withCredentials:true});
            console.log(connections);
            dispatch(setFriend(res.data.data));
            console.log(res.data.data)
            console.log(connections);
            
        }catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        console.log("Connections updated:", connections);
    }, [connections]);

    useEffect(()=>{
        fetchConnections()
    },[]);
        // {res && (<h1>{res.data}</h1>)
        // }
        // return (<h1> HIII</h1>)
    return connections?(
        <div className="flex flex-col justify-center items-center text-center gap-5">
        <h1 className="">Your connections</h1>
        <FriendsList />
        </div>
    ):(
        <h1>Fetching Requests...</h1>
    );
}
// export const {fetchConnections} = Connections;