import React, { useEffect, useState } from "react";
import Blog from "./blog/Blog";

const Blogs = ({ handleBookmarked, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <h1 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
        Total Blogs: {blogs.length}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmarked={handleBookmarked}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
