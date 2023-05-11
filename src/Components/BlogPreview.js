import {Link} from "react-router-dom"
import useFetch from "./useFetch"

const BlogPreview = ({ id,title, author, content }) => {
  return (
    <>
      <Link to={`/blogs/${id}`}>{title}</Link>
      <p>written by {author}</p>
    </>
  );
};

export default BlogPreview;
