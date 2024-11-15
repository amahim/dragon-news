import moment from "moment";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
import Category from "./MainHome/Category";
import Socials from "./MainHome/Socials";
import { Outlet } from "react-router-dom";
import logo from '../assets/logo.png'


const Home = () => {
    return (
        <div className="w-4/5 mx-auto py-5">
            {/* Heading Div */}
            <div className="text-center flex flex-col items-center gap-4">
                <img src={logo} alt="" />
                <p className="text-[#535353ab]">Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM Do YYYY')}</p>

                {/**  Marquee Headline **/}

                <div className="bg-[#53535349] p-2 flex gap-2 items-center">
                    <button className="btn btn-error text-white rounded-none text-base font-medium">Latest</button>
                    <Marquee>
                        <p><span className="text-error text-lg font-medium">Breaking News : </span>   Donald Trump has been elected as the 76th president of the United States  |  Sheik Hasina confessed her love for Narendra Modi |</p>
                    </Marquee>
                </div>

                {/* Navbar */}

                <div className="w-full mt-3">
                    <Navbar/>
                </div>

                {/* Home Main */}
                <div className="w-full md:grid md:grid-cols-12 gap-2 my-5 flex flex-col">
                    <div className=" col-span-3 "><Category/></div>
                    <div className=" col-span-6 "><Outlet/></div>
                    {/* <div className=" col-span-6 "><News/></div> */}
                    <div className=" col-span-3 "><Socials/></div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;