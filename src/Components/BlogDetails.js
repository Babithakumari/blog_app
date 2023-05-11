import {useParams} from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () =>{
    const {id} = useParams()
    const {data,isPending} = useFetch(`http://localhost:8000/blogs/${id}`)

    return(
        <div>
            {isPending && <p>Loading</p>}
            {
                data && (
                <div>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                </div>
                )
            }
            
        </div>
    )

}

export default BlogDetails;