import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    console.log(counter);
    if(counter>=10){
      return setCounter(10);
    }
  }
  const removeValue = () => {
    if(counter<=0){
      return setCounter(0);
    }
    else{
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value is {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
