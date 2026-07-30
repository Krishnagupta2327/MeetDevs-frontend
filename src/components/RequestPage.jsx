
// import axios from "axios";
// import { useEffect, useState } from "react";
// import {BaseUrl} from "../Utils/const.js";
// // import { store } from "../Utils/store.js";
// import { setRequests } from "../Utils/requestsSlice.js";
// import {useDispatch} from "react-redux";
// import { useSelector } from "react-redux";
// import {ReqList} from "./ReqList.jsx";

// export const RequestPage = ()=>{ 
//     const requests =  useSelector((store) => store.requests);
//     const theme = useSelector((store) => store.theme.mode);
//     const isDark = theme === "dark";
//     const dispatch = useDispatch();
//     const fetchRequests = async () =>{
//         try{
//             const res = await axios.get(BaseUrl+ "/user/requests/recieved",{withCredentials:true});
//             // console.log(connections);
//             dispatch(setRequests(res.data.data));
//             // console.log(res.data.data)
//             // console.log(connections);
            
//         }catch(err){
//             console.log(err);
//         }
//     }
//     useEffect(() => {
//         console.log("requests updated:",requests);
//     }, [requests]);

//     useEffect(()=>{
//         fetchRequests()
//     },[requests]);
//         // {res && (<h1>{res.data}</h1>)
//         // }
//         // return (<h1> HIII</h1>)
//     return requests?(
//         <div className="flex flex-col items-center px-4 py-12 md:py-16">
//             <div className="flex flex-col items-center text-center mb-10">
//                 <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? "text-sky-400" : "text-sky-600"}`}>
//                     add new connections
//                 </span>
//                 <h1 className={`text-3xl md:text-4xl font-bold tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
//                     Connection <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Requests</span>
//                 </h1>
//             </div>
//             <ReqList />
//         </div>
//     ):(
//         <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
//             <div className={`w-10 h-10 border-2 border-t-transparent rounded-full animate-spin ${isDark ? "border-sky-400" : "border-sky-600"}`}></div>
//             <h1 className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>Fetching Requests...</h1>
//         </div>
//     );
// }
// export const {fetchRequests} = RequestPage;

import axios from "axios";
import { useEffect } from "react";
import { BaseUrl } from "../Utils/const.js";
import { setRequests } from "../Utils/requestsSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { ReqList } from "./ReqList.jsx";

export const RequestPage = () => {
    const requests = useSelector((store) => store.requests);

    const theme = useSelector((store) => store.theme.mode);
    const isDark = theme === "dark";

    const dispatch = useDispatch();

    const fetchRequests = async () => {
        try {
            const res = await axios.get(
                BaseUrl + "/user/requests/recieved",
                { withCredentials: true }
            );

            dispatch(setRequests(res.data.data));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchRequests();
    }, []); // <-- fixed infinite loop

    useEffect(() => {
        console.log("requests updated:", requests);
    }, [requests]);

    return requests ? (
        <div className="flex flex-col items-center px-4 py-12 md:py-16">
            <div className="flex flex-col items-center text-center mb-10">
                <span
                    className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
                        isDark ? "text-sky-400" : "text-sky-600"
                    }`}
                >
                    add new connections
                </span>

                <h1
                    className={`text-3xl md:text-4xl font-bold tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    Connection{" "}
                    <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                        Requests
                    </span>
                </h1>
            </div>

            <ReqList fetchRequests={fetchRequests} />
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <div
                className={`w-10 h-10 border-2 border-t-transparent rounded-full animate-spin ${
                    isDark ? "border-sky-400" : "border-sky-600"
                }`}
            ></div>

            <h1
                className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                }`}
            >
                Fetching Requests...
            </h1>
        </div>
    );
};