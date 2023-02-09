import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ParallaxPrueba from './ParallaxPrueba'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ParallaxPrueba/>
    </div>
  )
}

export default App
