import { useState } from 'react'
import heart from '/heart.svg'
import './App.css'
import YesButton from './YesButton'
import NoButton from './NoButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={heart} className="logo" alt="Heart" />
      </div>
      <h1>Will You be my Valentine?</h1>
      <div className="card">
        <YesButton></YesButton>
        <NoButton></NoButton>

      </div>
    </>
  )
}

export default App
