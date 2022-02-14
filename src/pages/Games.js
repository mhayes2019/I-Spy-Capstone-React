import React from "react";
import './Games.css'
import {Link} from "react-router-dom"


export const Games=({games})=>{
  const challengers = games[0]
  const namesThing = [];

  if(challengers !== undefined){
    const challengerArrays = challengers.responder
    console.log(challengerArrays)
    console.log(challengers)

    for(let i=0; i<challengerArrays.length; i++){
      const whatIsThis = challengerArrays[i];
      const challenger = whatIsThis.challenger_name
      const challengerQuestion = whatIsThis.characteristic
      console.log(whatIsThis)
      

      namesThing.push(<Link key={whatIsThis.game_id} className="game-link" to={"/upload"}
        state={{gameId: whatIsThis}}
      >
        {challenger} says I Spy with my little eye something that is {challengerQuestion}</Link>)
    }
  }

  console.log({namesThing});

  return(
          <div className="challenger-wrapper">
            <div className="yellow"></div>
            <div className="games-header">
              You have challenges ready to play
            </div>
            <div className="yellow"></div>
            <div className="games-link-wrapper">{namesThing} </div>
          </div>
      ) 
}

export default Games