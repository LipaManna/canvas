import React from 'react'
import '../Header/header.scss'
import Logo from '../../assets/logo-dark.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <nav className='container'>
          <div className='main-header'>
          
            <div className='logo'>
              <img src={Logo}/>
            </div>
            <div className='hdr-rt'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About Us</Link></li>
                <li><a href=''>Blogs</a></li>
                <li><a href=''>Community</a></li>
                <li><Link to='faq'>FAQ</Link></li>
              </ul>
            </div>
          
          </div>
        </nav>
    </header>
  )
}

export default Header