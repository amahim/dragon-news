import React from 'react';
import Socials from './Socials';
import Navbar from '../Navbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)

    return (
        <div className='w-4/5 mx-auto'>
            <div>
                <Navbar/>
            </div>
            <div className=' md:grid md:grid-cols-12 flex flex-col gap-4'>
                <div className='md:col-span-9'>
                    <h2 className='font-bold text-xl mb-5'>Dragon News</h2>
                        <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                            src={news?.image_url}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-start">{news?.title}</h2>
                            <p className='text-start'>{news?.details}</p>
                            <div className="card-actions">
                            <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Go Back</Link>
                            </div>
                        </div>
                        </div>
                </div>
                <div className='md:col-span-3'>
                    <Socials/>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;