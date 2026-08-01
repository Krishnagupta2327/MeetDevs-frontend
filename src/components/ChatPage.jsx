import { useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { BaseUrl } from "../Utils/const";
import { createSocketConnection } from "../Utils/socket";

export const ChatPage =  ()=>{
    const [target, setTarget] = useState(null);
    const user = useSelector((store)=> store.user);
    const userId=  user?._id;
    const [newMessage,setNewMessage] = useState("");
    const theme = useSelector((store) => store.theme.mode);
    const [msgs, setMsgs] = useState([]);
    const isDark = theme === "dark";
    const {targetUserId} = useParams();
    
    const fetchChat = async ()=>{
        const resp = await axios.get(BaseUrl + "/chat/"+targetUserId, {
            withCredentials:true
        });
       
        setMsgs(resp.data.chat);
    }
    
    
        async function fetchUser(){
            const ress = await axios.get(BaseUrl+ "/user/info/"+targetUserId, {withCredentials:true});
            setTarget(ress.data.data);
           
        }
    
    useEffect(()=>{fetchUser()},[]);
    useEffect(()=>{fetchChat()},[]);
    useEffect(()=>{
        const socket = createSocketConnection();
        socket.emit("joinChat",{userId , targetUserId});

        socket.on("messageReceived",({newMessage,userId, createdAt})=>{
            console.log(newMessage);
            setMsgs((msgs)=>[...msgs,{text:newMessage,senderId:userId, createdAt}]);
        })

        return ()=> socket.disconnect();
    },[userId]);

    const sendMessage=()=>{
        const socket= createSocketConnection();
        socket.emit("sendMessage",{
            
            userId,
            userName : user.firstName+" "+user.lastName,
            newMessage,
            targetUserId
        });
        fetchChat();
        setNewMessage("");
    };
    

   
    return user?(
     
        
        <div className={`h-[80vh] w-full max-w-3xl mx-auto my-8 rounded-3xl border backdrop-blur-xl flex flex-col overflow-hidden transition-colors duration-300 ${isDark ? "bg-white/3 border-white/10" : "bg-white border-black/5 shadow-xl"}`}>
           
            
                    {target && <div className={`flex items-center justify-between px-6 py-4 border-b ${isDark ? "border-white/10 bg-white/2" : "border-black/5 bg-black/1"}`}>
                    <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full object-cover" src={target.imgUrl} alt="" />
                        <div>
                          <h2 className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{target.firstName + " "+target.lastName}</h2>
                          <p className="text-xs text-sky-400">● Online</p>
                        </div>
                    </div>
                    </div>}

                    <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
                        
                      {msgs.map((msg)=>{
                        const time = new Date(msg.createdAt).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                        });
                        return (
                            <div className= {msg.senderId === userId? "flex items-start gap-3 flex-row-reverse": "flex items-start gap-3 "}>
                        
                        <div>
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className={`text-xs font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>{msg.userName}</span>
                            <span className={`text-[10px] ${isDark ? "text-gray-500" : "text-gray-400"}`}>{time}</span>
                          </div>
                          <div className={`inline-block px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm ${isDark ? "bg-white/5 text-gray-200 border border-white/10" : "bg-black/5 text-gray-800"}`}>
                          {  msg.text}
                          </div>
                          
                        </div>
                      </div>
                        )
                      })}

                     

                    </div>
            
                    

<div className={`flex items-center gap-3 px-4 py-4 border-t ${isDark ? "border-white/10" : "border-black/5"}`}>
  <div className={`flex-1 flex items-center gap-2 rounded-full px-4 py-2 border ${isDark ? "bg-white/5 border-white/10 focus-within:border-sky-500/50" : "bg-black/5 border-black/10 focus-within:border-sky-400"}`}>
    
    <input
      type="text"
      placeholder="Write a message..."
      value={newMessage}
      onChange={(e)=> setNewMessage(e.target.value)}
      className={`flex-1 bg-transparent text-sm focus:outline-none ${isDark ? "text-white placeholder:text-gray-500" : "text-gray-900 placeholder:text-gray-400"}`}
    />
  </div>
  <button 
  onClick={sendMessage}
  className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">Send</button>
</div>
        </div>
    ):(
        <h1>chatpage</h1>
    )
};