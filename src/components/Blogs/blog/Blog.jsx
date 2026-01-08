import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
  const { title, cover, author, posted_date, author_img, hashtags } = blog;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={cover}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-center gap-3">
          <div>
            <img src={author_img} alt="" className="w-14 rounded-full" />
          </div>
          <p className="text-xl">Author: {author}</p>
          <FaBookmark className="text-2xl hover:text-blue-400 cursor-pointer text-purple-500" />
        </div>
        <p className="text-xl">Publish Date: {posted_date}</p>
        <p className="text-xl">Author: {author}</p>
        <div className="flex gap-2 w-[40%]">
          <p className="px-2 bg-amber-100">#{hashtags[0]}</p>
          <p className="px-2 bg-amber-100">#{hashtags[1]}</p>
        </div>
        <div className="flex justify-end">
            <button className="btn btn-primary hover:scale-105 transition-all ">Mark as Read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
