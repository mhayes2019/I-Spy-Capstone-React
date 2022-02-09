import React, { useCallback, useState } from "react";
import PropTypes from "prop-types"
import './Challenge.css'
// import Header from "./Header"
import {useNavigate} from "react-router-dom"
import axios from 'axios';

export const Games=({games})=>{

const[currentGames,setCurrentGames]=useState(games)

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