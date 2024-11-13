import { useEffect, useState } from "react";

const Category = () => {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])



    return (
        <div>
            {/* heading */}
            <div>
                <h3 className="md:text-xl font-bold  mb-5">All Caterogy</h3>
            </div>

            {/* btns */}
            <div className="flex flex-col gap-2 ">
                {
                    categories.map(category=>(
                        <button className="btn rounded-md">{category.name}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;