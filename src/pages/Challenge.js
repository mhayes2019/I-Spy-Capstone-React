import React from "react";
import PropTypes from "prop-types"
import './Challenge.css'
// import Header from "./Header"

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

        return(
        <div className="body">
            <header className="header">
              <button className="home-button">Home</button>
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
            <button onClick={()=>console.log("I pushed the button")}>Push me to get to sending a friend challenge</button>
        </body> 
        </div>
        ) 

      
    }
    Challenge.propTypes={
      friends: PropTypes.array,
    }

    export default Challenge