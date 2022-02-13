import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types"
import './Challenge.css'
// import Header from "./Header"
// import {useNavigate} from "react-router-dom"
// import axios from 'axios';
// import { getDefaultNormalizer } from "@testing-library/react";
import {Link} from "react-router-dom"


export const Games=({games})=>{
  const challengers = games[0]
  let namesThing = []



  if(challengers !== undefined){
    const challengerArrays = challengers.responder

    for(let i=0; i<challengerArrays.length; i++){
      const whatIsThis = challengerArrays[i];
      const challenger = whatIsThis.responder_name
      const challengerQuestion = whatIsThis.characteristic
      console.log(whatIsThis)
      

      namesThing.push(<Link to={"/upload"}
        state={{gameId: whatIsThis}}
      >
        {challenger} has challenged you to a game of ISpy with question {challengerQuestion} <br/><br/></Link>)
    }
  }

  console.log({namesThing})
 


  return(
      <div className="body">
          <h2>Your Games</h2>
          <div className="challenger-wrapper">
            <div>
              You have challenges ready to play
            </div>
            <div>{namesThing} </div>
         
          </div>
      </div>
      ) 
}

export default Games