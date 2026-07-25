
import {User} from "./User.jsx";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

export const WithEditTag =(User)=>{
    return (props)=>{
        const theme = useSelector((store) => store.theme.mode);
        const isDark = theme === "dark";
        return (
            <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                       <Link to="/editProfile">
                            <div className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-md cursor-pointer transition-all ${isDark ? "bg-black/40 border-white/20 text-white hover:bg-sky-500/20 hover:border-sky-500/40" : "bg-white/80 border-black/10 text-gray-800 hover:bg-sky-50 hover:border-sky-300"}`}>
                                Edit Profile
                            </div>
                        </Link> 
                </div>
                <User {...props} />
            </div>
        );
    };
};