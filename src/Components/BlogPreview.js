import {Link} from "react-router-dom"
import {useState} from "react"

const BlogPreview = ({ id,title, author, content }) => {

  
  return (
    <div class="card">
      <Link to={`/blogs/${id}`}>{title}</Link>
      <p>written by {author}</p>
    </div>
  );
};

export default BlogPreview;
