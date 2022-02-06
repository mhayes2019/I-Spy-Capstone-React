import React from "react";
import PropTypes from "prop-types"
import './Challenge.css'
// import Header from "./Header"
import {Link} from "react-router-dom"

export const Challenge=({friends})=> {
  console.log(friends)
  // const names=["Riley","Melinda","Koa","Kai"]
      
  
  let options = []
      // for loop through list of name
      for(let i=0; i<friends.length; i++){
        const name = friends[i];
        options.push(<option value={name}>{name}</option>)
      }
      console.log(options)
      const handleGoHome= () => {
        console.log("handle go home clicked")
      }

        return(
        <div className="body">
            <header className="header">
              <Link className="home-button" to={"./Home.js"}>Home</Link>
                <button className="log-out-button">Log Out</button>
                
            </header>
        <body>   
            <h1>I SPY</h1>
            <div className="drop-down-space-wrapper">
            <label className="label">find a friend</label>
            <select className ="friend-select" name="find a friend" id="selectName">
              {options}
            </select>
            </div>
            <div className ="input-text-box">
            <input type="text" name="user_email" placeholder="Type A Chararistic Here" />
            </div>
            <div className ="start-game-button">
            <button onClick={()=>console.log("I pushed the button")}>Eye Spy With My Little Eye Something That Is</button>
            </div>
        </body> 
        </div>
        ) 

      
    }
    Challenge.propTypes={
      friends: PropTypes.array,
    }

    export default Challenge