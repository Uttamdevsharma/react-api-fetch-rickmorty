import { useState } from "react"
import Person from "./components/Person"


function App() {

  const [count,setCount] = useState(15);

  const Counter = () => {
    setCount(count + 1);
  }
  
  return (
    <>
    
    <button onClick={Counter}> ADD </button>
      <Person title = "Hello"  name = "Uttam Sharma" age={18} />
      <Person name = "Riddi" age={count}/>

    </>
  )
}

export default App
