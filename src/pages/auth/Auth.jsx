import React, { useState } from 'react'
import "./auth.css"
import { MdSecurity } from "react-icons/md"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';
import imgAuth from "../../assets/auth-illustration.png"

const Auth = () => {
  const [visiblePassword, setVisiblePassword] = useState(false)

  return (
    <main className='auth-layout'>
      <section className='auth-left'>
        <div className='brand'>
          <div className='auth-security'>
            <MdSecurity size={20} color='#fff' />
          </div>
          <span className='brand-name'>VulnTracker</span>
        </div>

        <div className='auth-content'>
          <div className='auth-content-texts'>
            <h2>Faça seu login</h2>
            <p>Bem vindo de volta! Entre com suas credenciais</p>
          </div>
          <div className='login-form'>
            <form>
              <label className='login email'>
                <span>Email</span>
                <div className='input-icon-container'>
                  <FiMail size={16} className="input-icon" />
                  <input
                    type="email"
                    placeholder="seuEmail@gmail.com"
                    name="email"
                    required
                  />
                </div>
              </label>

              <label className='login password'>
                <span>Senha</span>
                <div className="input-icon-container">
                  <FiLock size={16} className="input-icon" />
                  <input type={visiblePassword ? "text" : "password"} placeholder="******" name="password" className='input-password' />
                  <button type="button" className="toggle-password" onClick={() => setVisiblePassword(!visiblePassword)}>
                    {visiblePassword ? <FaEyeSlash size={16} color='#73777a'/> : <FaEye size={16} color='#73777a'/>}
                  </button>
                </div>
              </label>

              <input type="submit" value="Entrar" className='input-register' />
              <span className='text-register'>Não tem conta ? <Link to="/RegisterUser" className='register-link'>Crie agora</Link></span>
            </form>
          </div>
        </div>
      </section>
      <section className='auth-right'>
        <img src={imgAuth} alt="auth ilustração" />
        <div className='auth-right-content'>
          <h2>Gestão completa de vulnerabilidades</h2>
          <p>Identifique, rastreie e corrija vulnerabilidades de segurança com eficiência usando nossa plataforma moderna e intuitiva.</p>
        </div>
      </section>
    </main>
  )
}

export default Auth