import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength]= useState(8)
  const [numberAllowed, stNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()
  
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str = 

  }, [length, numberAllowed, charAllowed, setPassword])



  return (
    <>
      <h1 className='text-4xl text-center text-white' >password generator</h1>
    </>  
    
  )
}

export default App
