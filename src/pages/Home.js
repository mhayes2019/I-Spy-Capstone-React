import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"
export const Home = ()=> {
    return(
        <div>
        <h1>I Spy</h1>
    <div className="home-wrapper">
        <Link className="home-button" to="/challenge">Challenge A Friend</Link>
    </div>
    </div>
    )
}

export default Home