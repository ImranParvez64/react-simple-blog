import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  const [marked, setMarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarked = (blog) => {
    const exists = marked.find((item) => item.id === blog.id);
    if (!exists) {
      setMarked([...marked, blog]);
    }
  };

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    handleRemovedBookmarked(id);
  };

  const handleRemovedBookmarked = (id) => {
    const remaining = marked.filter((item) => item.id !== id);
    setMarked(remaining);
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <Blogs
              handleBookmarked={handleBookmarked}
              handleMarkAsRead={handleMarkAsRead}
            />
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-6 bg-white rounded-2xl shadow-md p-6">
              <div className="mb-4 p-4 bg-purple-50 rounded-xl">
                <p className="text-lg font-semibold text-purple-700">
                  Reading Time
                </p>
                <p className="text-2xl font-bold text-purple-900">
                  {readingTime} min
                </p>
              </div>

              <div className="mb-6 p-4 bg-amber-50 rounded-xl">
                <p className="text-lg font-semibold text-amber-700">
                  Bookmarked Blogs
                </p>
                <p className="text-2xl font-bold text-amber-900">
                  {marked.length}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {marked.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="p-3 bg-amber-100 rounded-lg text-sm font-medium text-gray-800 shadow-sm hover:shadow transition"
                  >
                    {bookmark.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
