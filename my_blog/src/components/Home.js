import React, { useState,useEffect } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const handleClick=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!==id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    console.log("useEffect ran");
  },[]);
  return <div className="home">
    <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick}/>
    {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario Blogs!" handleClick={handleClick}/> */}
  </div>;
}
