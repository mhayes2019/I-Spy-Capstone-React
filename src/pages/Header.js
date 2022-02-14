import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"


//creating a component for navigation
export const Header = () => {
  return(
    <nav>
      <div className="header">
            <Link className="home-button" to="/">Home</Link>
            <Link className="games-button" to="/games">Games</Link>
            <Link className="logout-buton"to="/login">Logout</Link>  
        </div>

    </nav>
  )
}

export default Header