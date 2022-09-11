import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending]=useState(true);
  const [error, setError]=useState(null);

  // const handleClick = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    setTimeout(()=>{
      fetch("http://localhost:8000/blogs")
      .then((res) => {
        console.log(res);
        if(!res.ok)
        {
          throw Error("Could not fetch the data for that resource.")
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      }).catch(err=>{
        setIsPending(false);
        setError(err.message);
      })
    },1000);
  }, []);
  return (
    <div className="home">
      {error && <div>{error}</div> }
      {isPending && <div>Loading....</div> }
      {blogs && (
        // <BlogList blogs={blogs} title="All Blogs!" handleClick={handleClick} />
        <BlogList blogs={blogs} title="All Blogs!"/>
      )}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario Blogs!" handleClick={handleClick}/> */}
    </div>
  );
}
