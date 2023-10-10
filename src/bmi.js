import { useState, useRef } from "react";
const BMI=()=>{
    const weight = useRef(null);
    const height = useRef(null);
    const [Bmi, setBmi] = useState(0)
    function Reset() {
        weight.current.value=null;
        height.current.value=null;
        setBmi(0);
    }
    function calbmi() {
        setBmi(weight.current.value/Math.pow(height.current.value/100,2))
}
    return (<> 
    <h2>BMI</h2>
    Weight 
    <input  ref={weight} type='text'
    placeholder=''/> kg.
    <br/>Height 
    <input  ref={height} type='text'
    placeholder=''/> cm.
    <br/><br/><button onClick={()=>calbmi()}>คำนวณ</button>
    <p>Your BMI {Bmi.toFixed(2)} <br/>อยู่ในระดับ {Bmi < 18.5 ? 'ต่ำกว่ามารตฐาน' : Bmi > 30 ? 'เกินมารตฐาน' : 'มารตฐาน'}</p>
    <button onClick={()=>Reset()}>Reset</button>
    </>)
}
export default BMI;