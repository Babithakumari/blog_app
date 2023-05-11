const BlogPage = ({ title, author, content }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>written by {author}</p>
    </>
  );
};

export default BlogPage;
