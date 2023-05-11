import BlogList from "./BlogList";
import useFetch from "./useFetch"

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

  const {data,isPending} = useFetch("http://localhost:8000/blogs")

  
  return (
    <>
      {isPending && <p>Loading....</p>}
      {data && <BlogList blogs={data} />}
    </>
  );
};
export default Home;
