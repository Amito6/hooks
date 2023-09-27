import $ from "jquery";
import { useState,useEffect } from "react";
const useHttp = (request) =>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        request.success = (r)=>{
           return setData(r);
        }

      $.ajax(request)
    },[])
   return data; 

}

export default useHttp;