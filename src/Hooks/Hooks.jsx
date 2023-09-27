/* import { getByTitle } from "@testing-library/react";
import { useState,createContext, useContext,useRef,useEffect } from "react";
const Sender = createContext();

const Header = () =>{
    const userData = useContext(Sender);
    const [color,setColor] = useState("red")
    const Title = useRef();
    const Para = useRef();
    

    useEffect(()=>{
        Title.current.style.color =color;
        Title.current.style.border ="5px solid blue";
        Para.current.style.color= color
    })


    const getTitle = () =>{
       setColor("green");
    }
        

    const design = (
        <>
        <h1 ref={Title}>my name is : {userData.name} </h1>
        <h1 ref={Para} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, repellendus.</h1>
        <button  onClick={getTitle}>Click me</button>
        </>
    );
    return design;
}
const Footer = () =>{
    const item = useContext(Sender);
    console.log(item);
    const design = (
        <>
        <h1>my roll number is: {item.roll_num}</h1>
        </>
    );
    return design;
}

const Hooks = () =>{
    const [data,setData] = useState({
        name  : "Just for code",
        roll_num : 5
    })
    const design = (
        <>
        <Sender.Provider value={data}>
        <Header />
        <Footer />
        </Sender.Provider>
       
        </>
    );
    return design;
}
export default Hooks; */