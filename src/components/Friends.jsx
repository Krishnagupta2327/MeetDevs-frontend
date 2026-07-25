

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
    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";
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
        <div className="flex flex-col items-center">
        <FriendsList />
        </div>
    ):(
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <div className={`w-10 h-10 border-2 border-t-transparent rounded-full animate-spin ${isDark ? "border-sky-400" : "border-sky-600"}`}></div>
            <h1 className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Fetching Requests...</h1>
        </div>
    );
}
// export const {fetchConnections} = Connections;