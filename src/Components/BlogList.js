import BlogPage from "./BlogPage";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogPage
          key={blog.id}
          title={blog.title}
          author={blog.author}
          content={blog.content}
        />
      ))}
    </div>
  );
};
export default BlogList;
