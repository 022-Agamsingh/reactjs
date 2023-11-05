import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[counter,setcounter]= useState(15)
//  let counter = 5
  let addValue = () =>{
    //  console.log("value added",Math.random());
    
    //  counter = counter + 1
    setcounter(counter+1)
    console.log("Clicked",counter);
  }
  let removeValue = () =>{
    setcounter(counter-1)
    console.log("Clicked",counter);
  }
 
  return (
    <>
     <h1>chai or react</h1>
     <h2>counter value:  {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
    <button on onClick={removeValue}>remove value</button> 
         </>
  )
}

export default App
