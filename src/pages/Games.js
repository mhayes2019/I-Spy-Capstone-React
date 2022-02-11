import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types"
import './Challenge.css'
// import Header from "./Header"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export const Games=({games})=>{

const[currentGames,setCurrentGames]=useState(games)
const[post,setPost]=useState([])

useEffect(()=>{
    const baseurl="https://i-spy-be.herokuapp.com/games/1"
    axios.get(baseurl).then((response)=>{
      setPost(response.data)
    })
  },[])
  console.log(post)
 
  
//   challenger_id: 1
// challenger_name: "Diana"
// game_id: 1
// responder_name: "Melinda"
// text_challenger: null
const { challenger_id, challenger_name, game_id, responder_name, text_challenger} = post
console.log({ challenger_id, challenger_name, game_id, responder_name, text_challenger})

return(
    <div className="body">
        
    <body>   
        <h2>Your Games</h2>
        <p>{currentGames}</p>

    </body> 
    </div>
    ) 
}

export default Games