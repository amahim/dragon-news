import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AuthLayout = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto py-5">
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default AuthLayout;