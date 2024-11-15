import { useLoaderData } from "react-router-dom";
import NewsShow from "./NewsShow";

const News = () => {
    
    const {data} = useLoaderData(); 
    // console.log(data)

    return (
        <div>
            <div>
                <h3 className="md:text-xl font-bold mb-5">News</h3>
            </div>
            <div className="">
                {
                    data.map((news)=>(
                        <NewsShow key={news._id} news={news}></NewsShow>
                    ))
                }
            </div>
        </div>
      
    );
};

export default News;