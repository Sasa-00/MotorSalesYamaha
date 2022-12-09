import React from 'react'
import logo from './../Assets/logo.png'
import './../Styles/Header.css'
import { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

  const [isSmall, setIsSmall] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false)

  return (
    <nav>
      <Link to="/">
      <img className='logo' src={logo} alt="logo" />
      </Link>
      <ul className={isSmall ? 'active nav-list' : 'nav-list'}>
          <li className='nav-list--li'><Link className='nav-list--a' to="/">Početna</Link></li>
          <li className='nav-list--li'><Link className='nav-list--a' to="/about">O nama</Link></li>
          <li onClick={() => { setIsDropdown(current => !current) }} className='nav-list--li sub-menu'>
            <a className='nav-list--a' >
              Kategorije
              <i className="fa fa-chevron-down arrow"></i>
            </a>
            <ul className={isDropdown ? 'dropdown show_dropdown' : 'dropdown'}>
              <li><Link to="/category/motorcycle">Motocikli</Link></li>
              <li><Link to="/category/scooter">Skuteri</Link></li>
              <li><Link to="/category/atv">ATV</Link></li>
              <li><Link to="/category/nautical">Nautika</Link></li>
            </ul>
          </li>
          <li className='nav-list--li'><Link className='nav-list--a' to="/contact">Kontakt</Link></li>
      </ul>
      <div onClick={() => { setIsSmall(current => !current) }} className='menu'>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
    </nav>
  )
}

export default Navbar