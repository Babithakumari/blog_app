import {useState} from "react"

const Create = () =>
{
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [author,setAuthor] = useState("")
    const [isPending,setPending] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setPending(true)
        const newBlog = {title,content,author}

        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body : JSON.stringify(newBlog)
        }).then(()=>{
            console.log("new blog")
            setPending(false)
    })

    }

    return(
        <form>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter blog Title"/><br></br>
            <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)} placeholder="Enter author"/><br></br>
            <textarea value={content} onChange={(e)=> setContent(e.target.value)} placeholder="Enter blog content"></textarea><br></br>
            {!isPending && <button type="submit" onClick = {handleSubmit}>Add Blog</button>}
            {isPending && <button>Adding Blog...</button>}
        </form>
    )
}
export default Create