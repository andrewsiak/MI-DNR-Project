import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Nav_bar from "./components/nav_bar/Nav_bar";
import About from "./components/about/About";
import Users from "./components/user_account/Account_page";
import LoginForm from "./components/login_form/Login_form";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Campground_body from "./components/campground_body/Campground_body";
import Account_page from "./components/user_account/Account_page";
// import Campground_list from './components/campgrounds_list/Campgrounds_list'

// require('dotenv').config()
// const API_KEY = process.env.GOOGLE_KEY
// console.log(GOOGLE_KEY)

function App() {
  const [userId, setUserId] = useState(null);
  console.log(userId);
  useEffect(() => {
    setUserId(localStorage.getItem(localStorage.getItem("userId") || null));
  }, []);

  const bgStyle = {
    backgroundImage: "url(/images/lake-image.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  };

  return (
    <Router>
      <div className="App" style={bgStyle}>
        <Nav_bar />

        <Routes>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home userId={userId} />} />
          <Route path="/users" element={<Account_page userId={userId} />} />
          <Route path="/account" element={<Account_page userId={userId} />} />

          <Route
            path="/campgrounds"
            element={<Campground_body userId={userId} />}
          />

          <Route path="/campgrounds/:id" element={<Campground_body />} />
          <Route
            path="/login"
            element={<LoginForm userId={userId} setUserId={setUserId} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
