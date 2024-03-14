import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       {/* Nav Bar */}
       <div class="topnav">
        <Link to="/contact" href="#contact">Contact Us</Link>
        <Link to="/order" href="#order">Order Online</Link>
        <Link to="/menu" href="#menu">Menu</Link>
        <Link to="/" class="active" href="#home">Home</Link>
        <div class="cafe">
          <Link href="#name">CakeAtArea</Link>
        </div>
      </div>
      
    </div>
  )
}
