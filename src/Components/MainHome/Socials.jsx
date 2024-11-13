import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {  FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";


const Socials = () => {
    return (
        <div>
            {/* heading */}
            <div>
                <h3 className="md:text-xl font-bold  mb-5">Login With</h3>
            </div>

            {/* ggl,github */}
            <div className="flex gap-2  flex-col rounded-md">
                <button className="border-2 border-blue-600 btn btn-outline text-blue-600">
                    <FaGoogle/>  Login With Google</button>
                <button className="border-2 border-black btn btn-outline"><FaGithub/>  Login With Gituhb</button>
            </div>

            {/* fb,twitter,insta */}
            <div>
                <h1 className="text-xl font-medium  my-2">Find Us On</h1>
                <div className="join join-vertical rounded-md w-full text-start">
                    <button className="btn join-item text-xl btn-outline"><FaFacebook/>  Facebook</button>
                    <button className="btn join-item text-xl btn-outline "><FaSquareXTwitter/>  X</button>
                    <button className="btn join-item text-xl btn-outline"><FaSquareInstagram/>  Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Socials;