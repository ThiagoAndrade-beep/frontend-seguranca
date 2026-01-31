import React from 'react'
import "./navBar.css"
import { MdSecurity } from "react-icons/md"

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
            <button className='navBar-btn-auth'>Entrar</button>
            <button className='navBar-btn-register'>Criar conta</button>
        </div>
    </nav>
  )
}

export default NavBar