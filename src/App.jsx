import { useState } from "react"
import Person from "./components/Person"
import RicknMorty from "./components/RicknMorty";
import './App.css'


function App() {

  const [count,setCount] = useState(15);

  const Counter = () => {
    setCount(count + 1);
  }
  
  return (
    <>
    <RicknMorty/>
    </>
  )
}

export default App
