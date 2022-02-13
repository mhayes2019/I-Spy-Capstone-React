import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"
export const Home = ()=> {

    const currentUserName = localStorage.getItem('currentUserName');
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    const currentFirstName = localStorage.getItem('currentFirstName');

    return(
        <div>
        <h1>I Spy</h1>
        <h2>Welcome {currentUserName}</h2>
        <h3>{currentUserEmail}</h3>
    <div className="home-wrapper">
        <Link className="home-button" to="/challenge">Challenge A Friend</Link>
    </div>
    </div>
    )
}

export default Home