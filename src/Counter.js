import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("demo");
    function Reset() {
        setCount(0);
    }
    function onTextChange(event){
        setValue(event.target.value)
    }
    return (<> 
    <input type="text" value={value} 
    onChange={event=>onTextChange(event)}/>
    You input {value} length: {value.length}
    
    <br/><button onClick={()=>setCount(count+1)}>Click me</button>
    <br/><button onClick={()=>Reset()}>Reset</button>
    You click {count}
    </>)
}
export default Counter;