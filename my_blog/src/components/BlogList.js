import React from "react";
//   Dono work krta hai 


// export default function BlogList(props) {
    // const blogs= props.blogs;
    // const title=props.title;
//   return (
//     <div className="blog-list">
//         <h1>{title}</h1>
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//         </div>
//       ))}
//     </div>
//   );
// }.

// second method

// export default function BlogList({blogs,title,handleClick}) {

  export default function BlogList({blogs,title}) {
    
  return (
    <div className="blog-list">
        <h1>{title}</h1>
      {blogs&&blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* <button onClick={()=>handleClick(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
}
