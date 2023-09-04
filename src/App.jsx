import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
const App = () => {
    return (
        <div className="container">
            <div><Navigation/></div>
            <div><Hero/></div>
        </div>
    )
}

export default App

















/* 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        Konnichiwa Sekai San
    </>
  )
}

export default App
*/