import BlogPreview from "./BlogPreview";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs && blogs.map((blog) => (
        <BlogPreview
          key={blog.id}
          id={blog.id}
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  );
};
export default BlogList;
