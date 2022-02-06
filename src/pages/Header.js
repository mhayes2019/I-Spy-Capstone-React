import React from "react"
import {Link} from "react-router-dom"


//creating a component for navigation
export const Header = () => {
  return(
    <nav>
                  <header className="header">
            <Link to="/">Home</Link>
                <button className="log-out-button">Log Out</button>
                
            </header>

    </nav>
  )
}

export default Header