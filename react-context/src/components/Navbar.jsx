import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/About">About</Link>
        </nav>
    </div>
  )
}

export default Navbar