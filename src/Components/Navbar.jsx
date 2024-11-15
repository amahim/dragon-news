import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link,useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {
    const {user,logout} = useContext(AuthContext)

    const location = useLocation();
    const getLinkClass = (path) => {
        return location.pathname.startsWith(path) ? "text-error" : "";
    };

    return (
        <div className="flex md:flex-row md:gap-0 gap-3 flex-col md:justify-between items-center">
            <div className="flex gap-2 items-center ">
                {
                    user && user?.email ? (
                        <div className="flex items-center gap-2 ">
                            <img src={user?.photoURL} className="w-6 h-6 rounded-full md:w-10 md:h-10" />
                            <p className="text-error font-medium text-xl">{user?.displayName}</p>
                        </div>
                    ) : (
                        <p className=" text-xl font-medium"><FaUser/></p>
                    )
                    
                }
            </div>
            <div className="space-x-4 text-lg text-[#1f1e1ed7]">
                {/* <Link  to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link> */}
                <Link to="/" className={getLinkClass("/")}>Home</Link>
                <Link to="/about" className={getLinkClass("/about")}>About</Link>
                <Link to="/career" className={getLinkClass("/career")}>Career</Link>
            </div>
            <div className="flex gap-4 items-center"> 
                {
                    user && user?.email ? <button onClick={logout} className="btn rounded-none text-base btn-error">Logout</button> 
                    : 
                    <Link to="/auth/login" className="btn rounded-none text-base">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;