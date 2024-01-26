import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Nav_bar from './components/nav_bar/Nav_bar'
import About from './components/about/About'


function App() {
  const [count, setCount] = useState(0);
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
    <div className = "App">




    <Nav_bar />


    </div>
  )
}

export default App
