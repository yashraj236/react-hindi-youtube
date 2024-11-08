import {useEffect,useCallback, useState} from 'react'
import './App.css'

function App() {

  let [counter, setCounter] =  useState(15)

  // let counter = 15
  
  const addValue = () => {
    console.log("the value is ",counter);

    setCounter(counter+1)
  } 
  const removeValue = () => {
    setCounter(counter-1)
    console.log("### reduced value is ",counter)

  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>

     <br/>

     <button  onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
