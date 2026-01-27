import React ,{useState} from 'react'

function Calculator() {
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");

    const a=Number(num1);
    const b=Number(num2);
  return (
    <div>
         <h1>Calculator</h1>
         <input 
         placeholder='Enter the First value'
         onChange={(e)=>setNum1(e.target.value)}
        />
        <input 
         placeholder='Enter the Second value'
         onChange={(e)=>setNum2(e.target.value)}
        />
      <div style={{height:"200px",
        width:"250px",
        border:"2px solid ",
        backgroundcolor:"lightgrey",
        marginTop:"20px",
        marginLeft:"550px"}}>
            <p>Addition: {a+b}</p>
            <p>Subraction: {a-b}</p>
            <p>Multiplication: {a*b}</p>
            <p>Division:{b==0 ? "can't divided by zero":a/b}</p>
      </div>
    </div>
  
  )
}

export default Calculator