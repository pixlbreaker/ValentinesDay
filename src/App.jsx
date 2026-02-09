import { useState } from 'react'
import flower from '/flower.svg'
import './App.css'
import Valentine from './Valentine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={flower} className="logo" alt="Flower" />
      </div>
      <div className="card">
        <Valentine></Valentine>
      </div>
    </>
  )
}

export default App
