import React from "react";

export class Home extends React.Component{
    render() {
        // using fragments (<>) to be able to hold more than one div
        return(
        <div>
        <h1>I SPY</h1>
        <button onClick={()=>console.log("I pushed the button")}>Push me to get to sending a friend challenge</button>
        </div>
        ) 
    }
}