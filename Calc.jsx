import React, { useState } from 'react'
import "./App.css"

function Calc() {
    const[input,setinput] = useState("")
    const change = (e)=>{
      try {
        if(e.target.value =="="){
            setinput(eval(input))
        }
        else if (e.target.value =="C"){
            setinput("")

        }
        else if(e.target.value=="del"){
            setinput(input.toString().substring(0,input.length-1))
        }

        else{
            setinput(input+e.target.value)

        }

        
      } catch (error) {
        setinput(`${input}   error`)
        
      }
     
        



    }
  return (
   <>
    <div className="container" >
        <input type="text" value={input} 
        onChange={(e)=>{
            setinput(e.target.value)
        }}
    />
        <div className="first">
        <button onClick={change} value="C">C</button>
        <button onClick={change}  value="%">%</button>
        <button onClick={change}  value="del">del</button>
        <button onClick={change} value="/">/</button>
        </div>
        <div className="second">
            <button onClick={change} value="7">7</button>
            <button onClick={change}  value="8">8</button>
            <button onClick={change}  value="9">9</button>
            <button onClick={change} className='symbol' value="*">*</button>
        </div>
        <div className="third">
            <button onClick={change} value="4">4</button>
            <button onClick={change} value="5">5</button>
            <button onClick={change} value="6">6</button>
            <button onClick={change} className='symbol'value="-" >-</button>
        </div>
        <div className="forth">
            <button onClick={change} value="1">1</button>
            <button onClick={change} value="2">2</button>
            <button onClick={change} value="3">3</button>
            <button  onClick={change} className='symbol' value="+">+</button>
        </div>
        <div className="fifth">
            <button onClick={change} value="00">00</button>
            <button onClick={change} value="0">0</button>
            <button onClick={change} className='dot' value=".">.</button>
            <button onClick={change} className='symbol' value="=">=</button>

        </div>
    </div>
   </>
  )
}

export default Calc
