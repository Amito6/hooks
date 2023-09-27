import useHttp from "../Custom-hook/useHttp";
const Test = () =>{
    const request = {
        type : "GEt",
        url : "https://jsonplaceholder.typicode.com/users"
    }


    const data = useHttp(request);
    const Post = ({item})=>{
         const pDesign = (
            <>
            <div className="card">
                <div className="card-header">
                    {
                        item.name
                    }
                </div>
                <div className="card-body">
                    {
                        item.email
                    }
                </div>
            </div>
            </>
         );
         return pDesign;
     }   


    const design = (
        <>
        {
           data.map((item,index)=>{
            return <Post key={index} item={item}   />
            })
        }
        </>
    );
    return design;
}
export default Test;