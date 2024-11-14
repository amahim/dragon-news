import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createNewUser,setUser} = useContext(AuthContext)

    const handleRegSubmit =(e)=>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")

        createNewUser(email,password)
        .then((result) => {
            const user = result.user;
            setUser(user)
        })
        .catch((error) => {
            console.log("Error:", error.message)
        });
    }

    return (
        <div className="md:w-2/5 mx-auto w-4/5">
            <div>
                    <h1 className="text-center font-bold text-2xl">Register your account</h1>
            </div>
            <form onSubmit={handleRegSubmit} className="card-body border-2 rounded-xl mt-5 shadow-xl ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" 
                    placeholder="name" 
                    className="input input-bordered" 
                    name="name"
                    required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text"
                     placeholder="photo url"
                      className="input input-bordered"
                      name="photo"
                       required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" 
                placeholder="email" 
                className="input input-bordered" 
                name="email"
                required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" 
                placeholder="password" 
                className="input input-bordered" 
                name="password"
                required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>

                <div className="form-control mt-6">
                <button className="btn bg-[#4e4e4e] text-white">Register</button>
                </div>
                <div>
                    <h1>Already have an account? <Link to="/auth/login" className="text-blue-600">Login</Link></h1>
                </div>

            </form>
        </div>
    );
};

export default Register;