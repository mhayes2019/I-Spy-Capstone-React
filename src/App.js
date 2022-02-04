import {React, useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
// import {LoginPage} from "./pages/Login"
import {Challenge} from "./pages/Challenge"

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
      
      {/* <LoginPage/> */}
      <Challenge friends={friendNames}/>
    </div>
  );
}

export default App;
