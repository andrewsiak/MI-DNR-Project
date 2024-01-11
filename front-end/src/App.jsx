import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header />
    <Home />
    <About />

    </div>
  )
}

export default App
