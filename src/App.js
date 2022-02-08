import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import {LoginPage} from "./pages/Login"
import Challenge from "./pages/Challenge"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Header from "./pages/Header"
import Home from "./pages/Home"




function App() {
  const[post,setPost]=useState([])
  useEffect(()=>{
    const baseurl="https://i-spy-be.herokuapp.com/players"
    



    axios.get(baseurl).then((response)=>{
      setPost(response.data)
    })
  },[])
  console.log(post)
  

  const friendNames = post.map(a => a.name)
  console.log(friendNames)
  //
  return (
    <div className="App">
    <Router>
      
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/challenge" element={<Challenge friends={friendNames}/>}/>
        <Route path="/login" element={<LoginPage/>} />
        </Routes>

    </div>
    </Router>
    
      
      {/* <LoginPage/> */}
      {/* <Challenge friends={friendNames}/> */}
    </div>
  );
}

export default App;
