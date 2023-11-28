import React, { useEffect, useState } from 'react'
 import Axios from 'axios';
const baseURL ="https://jsonplaceholder.typicode.com/posts/1";


function GetAxios() {
const [my_data,setData] = useState([])
    useEffect(()=>{
    Axios.get(baseURL).then((response)=>{
       setData(response.data);
    })
    },[]);

  return (
   <>
   {
    my_data.map((item) => {
    const {id,title,body} = item;
    return(
        <div>
        <h1>{id} </h1>
        <h2>{title}</h2>
        <h3>{body}</h3>
        </div>
    )
    })
}
   </>
  )
}

export default GetAxios