import React from "react"
import {Link} from "react-router-dom"


//creating a component for navigation
export const Header = () => {
  return(
    <nav>
                  <header className="header">
            <Link to="/">Home</Link>
            <Link to="/login">Logout</Link>
            
                
            </header>

    </nav>
  )
}

export default Header