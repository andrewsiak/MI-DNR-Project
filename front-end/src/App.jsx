import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Nav_bar from './components/nav_bar/Nav_bar'
import About from './components/about/About'
import Users from './components/users/Users'
import LoginForm from './components/login_form/Login_form'
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';
import Campground_body from './components/campground_body/campground_body'
import Campground_list from './components/campgrounds_list/Campgrounds_list'


function App() {



  return (
    <Router>
      <div className = "App">

        <Nav_bar />
        
        <Routes>

            <Route path="about" element={<About/>}>
            </Route>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/users" element={<Users/>}>
            </Route>
            <Route path="/campgrounds" element={<Campground_body/>}/>
              
            <Route path="/campgrounds/:id" element={<Campground_body/>}/>
            <Route path="/login" element={<LoginForm/>}>
            </Route>
          
        </Routes>

     </div>
    </Router>
  )
}

export default App;
