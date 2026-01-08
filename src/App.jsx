import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex main-container container mx-auto">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%] text-center border">
          <p>Reading Time: 0</p>
          <p>Bookmarked Count: 0</p>
        </div>
      </div>
    </>
  );
}

export default App;
