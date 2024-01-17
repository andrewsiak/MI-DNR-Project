import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Nav_bar from './components/nav_bar/Nav_bar'


function App() {
  const [count, setCount] = useState(0)
  // const [campgrounds, setCampgrounds] = React.useState({});
  // const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   setLoading(true);
  //   fetch('api/campgrounds')
  //     .then((response) => response.json())
  //     .then((campgroundData) => {
  //       setCampgrounds(campgroundData);
  //       setLoading(false);
  //     });
  // }, []);



  return (
    <div>
    <Nav_bar />
    <Header />
    <Home />
    <About />

    </div>
  )
}

export default App
