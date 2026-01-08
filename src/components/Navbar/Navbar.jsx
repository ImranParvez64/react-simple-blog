import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">WB</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Web Blogs
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition">
              Blogs
            </button>
            <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition">
              Bookmarks
            </button>

            <div className="relative group">
              <button className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-500/30 hover:ring-purple-500 transition">
                <img
                  src="https://i.ibb.co.com/bR6RsD0t/my-1.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </button>

              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a className="block px-4 py-2 hover:bg-purple-50">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-purple-50">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-red-50 text-red-600">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
