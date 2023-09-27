import { useEffect, useState } from "react"; 
import $ from "jquery";
const HttpRequest = () =>{
   const[allData,setAllData] = useState([]);
const ajaxRequest = () =>{
  $.ajax({
    type : "GET",
    url : "http://localhost:1000",
    success : (response)=>{
      setAllData(response);
    }
  });
}

/*   useEffect(()=>{
   ajaxRequest();
  },[]) */

  const Card  = ({item}) =>{
    const design = (
      <>
      <div className="card mb-3">
        <div className="card-Header fw-bold px-2">
         Comment: {item.title}
        </div>
        <div className="card-body">
         Body: {item.body}
        </div>
      </div>
      </>
    );
    return design;
  }
   const design = (
  <>
     <div className="container py-4 ">
     <div className="d-flex justify-content-between align-items-center mb-4 ">
      <h1 className="p-0 m-0 display-4">Comments</h1>
      <button onClick={ajaxRequest} className="btn btn-success">New Comments</button>
     </div>
     {
      allData.map((item,index)=>{
        return < Card key={index} item={item} />
      })
     }
     </div>
  </>
   );
   return design;
}
export default HttpRequest;