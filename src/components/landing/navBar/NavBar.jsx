import React from 'react'
import "./navBar.css"
import { MdSecurity } from "react-icons/md"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navBar-container'>
        <div className='navBar-title'>
            <div className='navBar-icon-security'>
                <MdSecurity color='#fff' size={18}/>
            </div>
            <h3>VulnTracker</h3>
        </div>
        <div className='navBar-nav'>
            <p>Recursos</p>
            <p>Preços</p>
            <p>FAQ</p>
        </div>
        <div className='navBar-buttons'>
            <Link to='/LoginUser' className='navBar-btn-auth'>Entrar</Link>
            <Link to='/RegisterUser' className='navBar-btn-register'>Criar conta</Link>
        </div>
    </nav>
  )
}

export default NavBar