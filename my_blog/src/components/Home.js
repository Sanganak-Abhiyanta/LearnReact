import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const handleClick = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick} />
      )}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario Blogs!" handleClick={handleClick}/> */}
    </div>
  );
}
