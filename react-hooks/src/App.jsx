import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Link } from 'react-router-dom'
import { HookUseContext } from './components/HookUseContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>React Hooks</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default App
