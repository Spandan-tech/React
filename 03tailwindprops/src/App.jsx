import './App.css'
import Chai from './chai'

function App() {
  let myobj = {
    username: 'John',
    age: 30,
    
  }
  return (
    
    <>
      <h1 className="bg-orange-800 text-black p-4 rounded-xl mb-4" >tailwind test</h1>
      <Chai username="Spandan" btntext="click me"/>
      <Chai username="John" btntext="visit me" />
      
    </>
  )
}

export default App
