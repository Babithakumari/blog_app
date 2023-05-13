import {useParams} from "react-router-dom"
import useFetch from "./useFetch"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


const BlogDetails = () =>{
    const {id} = useParams()
    const {data:blog,isPending} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const handleDelete = () =>{
        fetch("http://localhost:8000/blogs/"+ blog.id, {
            method:"DELETE"
        }).then(()=>{
            history.push("/")
        })
      }

    return(
        <div>
            {isPending && <p>Loading</p>}
            {
                blog && (
                <div>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <button onClick={handleDelete}>delete</button>
                </div>
                )
            }
            
        </div>
    )

}

export default BlogDetails;