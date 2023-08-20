import { useState } from 'react'
import { Feed } from "./components";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Feed/>
    </>
  )
}

export default App
