import {User} from "./User.jsx";
import {Link} from "react-router-dom";

export const WithEditTag =(User)=>{
    return (props)=>{
        return (
            <div className="relative">
                <div className="absolute top-2 right-2 z-10">
                       <Link to="/editProfile"><div className="badge badge-outline bg-base-100">
                                Edit Profile
                            </div>
                        </Link> 
                </div>
                <User {...props} />
            </div>
        );
    };
};