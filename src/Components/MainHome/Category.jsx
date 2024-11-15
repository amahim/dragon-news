import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        // fetch("../../../public/categories.json")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
        // .then(data => setCategories(data))
    },[])



    return (
        <div>
            {/* heading */}
            <div>
                <h3 className="md:text-xl font-bold  mb-5">All Caterogy</h3>
            </div>

            {/* btns */}
            <div className="flex  flex-col-reverse gap-2 sticky top-0 z-50">
                {
                    categories.map((category)=>(
                        <NavLink to={`/category/${category.category_id}`}
                        className="btn rounded-md">{category.category_name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;