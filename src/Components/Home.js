import BlogList from "./BlogList";
const pages = [
  {
    id: 1,
    title: "HTML",
    author: "Babitha",
    content: "HTML is used for markup"
  },
  {
    id: 2,
    title: "CSS",
    author: "Babitha",
    content: "CSS used for styling"
  }
];
const Home = () => {
  return (
    <>
      <BlogList blogs={pages} />
    </>
  );
};
export default Home;
