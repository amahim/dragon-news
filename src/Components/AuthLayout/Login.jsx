import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const {userSignIn,setUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error,setError] = useState({})

    const handleLoginSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email")
        const password = form.get("password")
        // alert(`${email} and ${password}`)

        userSignIn(email,password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            navigate(location?.state ? location.state : "/")
        })
        .catch((err) => {
            setError({...error,login: err.code})
        });
    }

    return (
        <div className="md:w-2/5 mx-auto w-4/5">
            <div>
                    <h1 className="text-center font-bold text-2xl">Login to your account</h1>
            </div>
            <form  onSubmit={handleLoginSubmit} className="card-body border-2 mt-10 rounded-xl shadow-xl">
                

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input 
                type="email" 
                placeholder="email"
                 className="input input-bordered"
                 name="email"
                  required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input 
                type="password" 
                placeholder="password" 
                className="input input-bordered" 
                name="password"
                required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>

                <div className="form-control mt-6">
                <button className="btn bg-[#4e4e4e] text-white">Login</button>
                </div>
                <div>
                    {
                        error.login && (
                            <p className=" text-sm text-error ">{error.login}</p>
                        )
                    }
                </div>
                <div>
                    <h1>Don't have an account? <Link to="/auth/register" className="text-blue-600">Register</Link></h1>
                </div>

            </form>
        </div>
    );
};

export default Login;