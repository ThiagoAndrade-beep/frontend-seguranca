import React, { useState } from 'react'
import { MdSecurity } from "react-icons/md"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';
import imgAuth from "../../assets/auth-illustration.png"
import "./register.css"

const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const passwordRegex = /^(?=.*[@$!%*?&#])/;
  const justNumber = /\d/;

  const resultCaracter = passwordRegex.test(password)
  const resultNumber = justNumber.test(password)

  return (
    <main className='register-layout'>
      <section className='register-left'>
        <div className='brand'>
          <div className='auth-security'>
            <MdSecurity size={20} color='#fff' />
          </div>
          <span className='brand-name'>VulnTracker</span>
        </div>

        <div className='register-content'>
          <div className='register-content-texts'>
            <h2>Crie sua conta</h2>
            <p>Preencha os dados para começar</p>
          </div>
          <div className='register-form'>
            <form>
              <label className='register email'>
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

              <label className='register password'>
                <span>Senha</span>
                <div className="input-icon-container">
                  <FiLock size={16} className="input-icon" />
                  <input
                    type={visiblePassword ? "text" : "password"}
                    placeholder="******"
                    name="password"
                    className='input-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" className="toggle-password" onClick={() => setVisiblePassword(!visiblePassword)}>
                    {visiblePassword ? <FaEyeSlash size={16} color='#73777a' /> : <FaEye size={16} color='#73777a' />}
                  </button>
                </div>
              </label>
              <div className='verify-password'>
                <div className='check'>
                  <p style={{
                    color: password.length >= 6 ? 'green' : ''
                  }}>
                    <HiOutlineCheckCircle />
                    Pelo menos 6 caracteres
                  </p>
                </div>
                <div className='check'>
                  <p style={{
                    color: resultCaracter ? 'green' : ''
                  }}>
                    <HiOutlineCheckCircle />
                    Pelo menos 1 caracter especial
                  </p>
                </div>
                <div className='check'>
                  <p style={{
                    color: resultNumber ? 'green' : ''
                  }}>
                    <HiOutlineCheckCircle />
                    Pelo menos 1 número
                  </p>
                </div>
              </div>

              <input type="submit" value="Criar conta" className='input-register' />
              <span className='text-login'>Já tem uma conta ? <Link to="/LoginUser" className='login-link'>Entrar</Link></span>
            </form>
          </div>
        </div>
      </section>
      <section className='register-right'>
        <img src={imgAuth} alt="register ilustração" />
        <div className='register-right-content'>
          <h2>Gestão completa de vulnerabilidades</h2>
          <p>Identifique, rastreie e corrija vulnerabilidades de segurança com eficiência usando nossa plataforma moderna e intuitiva.</p>
        </div>
      </section>
    </main>
  )
}

export default Register