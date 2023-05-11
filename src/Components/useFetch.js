import {useState,useEffect} from "react"


const useFetch = (url) =>{

    const [data,setData] = useState(null)
    const [isPending,setPending] = useState(true)

    useEffect(()=>{

        const abortCont = new AbortController();
        fetch(url,{signal:abortCont.signal})
        .then(res=>{
          return res.json()
        })
        .then(data => {
          setData(data)
          setPending(false)
          
        })
        .catch(err=>{
            if(err.name==="AbortError"){
                console.log("Error aborted")
            }
            else{
                console.log(err.message)

            }
          
        })
        return ()=> abortCont.abort()
      },[url])
      return {data,isPending}
}


export default useFetch;