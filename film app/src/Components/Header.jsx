import React from 'react'
import logo from '../Assets/logo.png';


const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="star wars" />
    </div>
  )
}

export default Header