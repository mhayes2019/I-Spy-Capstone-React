import {React, useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import './App.css';
import {LoginPage} from "./pages/Login"
import Challenge from "./pages/Challenge"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Header from "./pages/Header"
import Home from "./pages/Home"
import Games from "./pages/Games"
import Upload from "./pages/Upload"

function App() {
  // state stuff
  const[post,setPost]=useState([])
  const[gamesPost, setGamesPost] =useState([])
  const[friendNames, setFriendNames] = useState([])
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  // current user stuff
  const currentUserName = localStorage.getItem('currentUserName');
  const currentUserEmail = localStorage.getItem('currentUserEmail');
  const currentFirstName = localStorage.getItem('currentFirstName');


  useEffect(()=>{

    const baseurl="https://i-spy-be.herokuapp.com/players"
    let currentUserId;


    // const [info, setInfo] = useState();
    // console.log(info);


    const getPlayers = async () => {axios.get(baseurl).then((response)=>{
      setPost(response.data)
      const friendNames = post.map(a => a.name)
      const friendList = { ...friendNames }
      console.log("here friendList",friendList)
      const friendObject =Object.keys(friendList).find(key => friendList[key] === currentFirstName);
      currentUserId = parseInt(friendObject) + 1;

      const array = Object.keys(friendList)
    .map(function(key) {
        return friendList[key];
    });
      setFriendNames(array)
      
    })}

  const userObject = post;

  
  const friendsArray = []
  userObject.forEach(function (arrayItem) {
    // this is where it's checking the current first name of user against the name coming in from google login
    if(currentFirstName === arrayItem.name){
      console.log(arrayItem.name)
      friendsArray.push(arrayItem.name)
      console.log("In the loop", friendsArray)
      currentUserId = arrayItem.id


    }
});

localStorage.setItem('currentUserChallengeId', currentUserId)
const gamesUrl=`http://i-spy-be.herokuapp.com/games/${currentUserId}`


const postGames = async () => {axios.get(gamesUrl).then((response)=>{
    setGamesPost(response.data)
  })}

  console.log({gamesPost})

  getPlayers()
  postGames()

  },[])

  useEffect(() => {
     const oneTime = () => forceUpdate();
     oneTime()

  }, [])
  return (
    <div className="App">
    <Router>
      
    <div className="app-body">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/challenge" element={<Challenge friends={friendNames}/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/games" element={<Games games={gamesPost}/>}/>

        <Route path="/upload" element={<Upload games={gamesPost}/> }/>
        </Routes>

    </div>
    </Router>
    </div>
  );
}

export default App;
