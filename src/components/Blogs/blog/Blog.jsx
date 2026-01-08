import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarked, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    posted_date,
    author_img,
    hashtags,
    reading_time,
    id,
  } = blog;

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={cover}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => handleBookmarked(blog)}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-purple-100 transition"
        >
          <FaBookmark className="text-xl text-purple-600" />
        </button>
      </div>

      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-snug">
          {title}
        </h2>

        <div className="flex items-center gap-3">
          <img
            src={author_img}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium text-gray-700">{author}</span>
            <span className="text-sm text-gray-500">{posted_date}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-amber-100 text-amber-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">
            {reading_time} min read
          </span>
          <button
            onClick={() => handleMarkAsRead(reading_time, id)}
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 hover:scale-105 transition"
          >
            Mark as Read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
