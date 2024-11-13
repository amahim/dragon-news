 import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const NewsShow = (props = {}) => {
  const {news} = props || {};

  const { title, author = {}, rating = {}, total_view, thumbnail_url, details } = news;

  return (
    <div className="card w-full rounded-none bg-base-100 shadow-lg border-b-2 p-2">
      {/* Author Section */}
      <div className="flex items-center p-4">
        <img
          src={author.img}
          alt={author.name || "Author"}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="text-sm font-semibold">{author.name || "Unknown Author"}</h2>
          <p className="text-xs text-gray-500">{author.published_date ? new Date(author.published_date).toLocaleDateString() : "No Date"}</p>
        </div>
      </div>

      {/* Title Section */}
      <div className="px-4 pb-2">
        <h2 className=" text-start card-title text-lg font-semibold">{title || "No Title"}</h2>
      </div>

      {/* Image */}
      <figure>
        <img src={thumbnail_url} alt={title || "News Thumbnail"} className=" " />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details ? details.slice(0, 150) : "No details available"}... 
          <span className="text-blue-600 cursor-pointer">Read More</span>
        </p>
      </div>

      {/* Rating and Views */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center space-x-1 text-yellow-500">
          <FaStar />
          <span className="font-semibold">{rating.number || 0}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600">
          <AiOutlineEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsShow;
