import React, { useCallback, useState } from "react";
import PropTypes from "prop-types"
import './Challenge.css'
// import Header from "./Header"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export const Challenge=({friends})=> {
  console.log(friends)
  const[post,setPost]=useState([])

  // const names=["Riley","Melinda","Koa","Kai"]
      
  
  let options = []
      // for loop through list of name
      for(let i=0; i<friends.length; i++){
        const name = friends[i];
        options.push(<option value={name}>{name}</option>)
      }
      console.log(options)

      const navigate= useNavigate();

      const goHome = useCallback(() => navigate('/', {replace: true}), [navigate])

      // change players to game when ready
      const URL="https://i-spy-be.herokuapp.com/players/game"
      const requestBody={
        // instead of putting adding new name, i need to put 
        challenger_id: 1, 
        responder_id: 3
      }
      const handleCreateGame= () => {
        axios.post(URL, requestBody).then((response)=>{
          setPost(response.data)
        })
        console.log(post)
        console.log("handle create game clicked")
        return goHome()
      }

      const handleOnChangeFriends = (option) => {
        console.log("handleOnChangeFriends clicked", option.value)
      }

        return(
        <div className="body">
            
        <body>   
            <h1>I SPY</h1>
            <div className="drop-down-space-wrapper">
            <label className="label">find a friend</label>
            <select className ="friend-select" name="find a friend" id="selectName" onChange={handleOnChangeFriends}>
              {options}
            </select>
            </div>
            <div className ="input-text-box">
            <input type="text" name="user_email" placeholder="Type A Chararistic Here" />
            </div>
            <div className ="start-game-button-wrapper">
            <button className="start-game-button"onClick={handleCreateGame}>
              Eye Spy With My Little Eye Something That Is
            </button>
            </div>
        </body> 
        </div>
        ) 

      
    }
    Challenge.propTypes={
      friends: PropTypes.array,
    }

    export default Challenge