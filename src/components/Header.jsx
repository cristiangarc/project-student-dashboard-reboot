import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <h1 className="title">Student Dashboard</h1>
        <Link to={"/"} className='home'>Home </Link>
        <Link to={"/about"} className='about'>About</Link>
    </header>
  )
}

export default Header