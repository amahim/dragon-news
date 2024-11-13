import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="space-x-4 text-lg text-[#1f1e1ed7]">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="flex gap-4 items-center"> 
                <FaUser className="text-2xl"></FaUser>
                <button className="btn rounded-none text-base">Login</button>
            </div>
        </div>
    );
};

export default Navbar;