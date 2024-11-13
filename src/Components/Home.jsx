import moment from "moment";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="w-4/5 mx-auto py-5">
            {/* Heading Div */}
            <div className="text-center flex flex-col items-center gap-4">
                <img src="logo.png" alt="" />
                <p className="text-[#535353ab]">Journalism Without Fear or Favour</p>
                <p>{moment().format('dddd, MMMM Do YYYY')}</p>

                {/* Marquee Headline */}

                <div className="bg-[#53535349] p-2 flex gap-2 items-center">
                    <button className="btn btn-error text-white rounded-none text-base font-medium">Latest</button>
                    <Marquee>
                        <p><span className="text-error text-lg font-medium">Breaking News : </span>   Real Madrid won record breaking 15th UCL  |  Vinicius Junior is heading towards the Ballon D'or |</p>
                    </Marquee>
                </div>
                {/* Navbar */}
                <div className="w-full mt-3">
                    <Navbar/>
                </div>
            </div>
            
        </div>
    );
};

export default Home;