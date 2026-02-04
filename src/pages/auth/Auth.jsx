import React, { useContext, useState } from 'react'
import "./auth.css"
import { MdSecurity } from "react-icons/md"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import imgAuth from "../../assets/auth-illustration.png"
import fetchApi from '../../services/axios';
import { AuthContext } from '../../context/AuthContext';

const Auth = () => {
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const {setUser} = useContext(AuthContext)

  async function handleSubmit(e) {
      e.preventDefault()

      const user = {
        email,
        password
      }

      try {
        const response = await fetchApi.post('login', user)
        const token = response.data.token
      
        localStorage.setItem('token', token)

        const userRespose = await fetchApi.get('app', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setUser(userRespose.data.userData)
        alert(response.data.msg)

        navigate('/app/vulnerabilities')
      } catch (error) {
        alert(error.response.data.msg)
        console.log('erro ao fazer login', error)
      }
  }

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
            <form onSubmit={handleSubmit}>
              <label className='login email'>
                <span>Email</span>
                <div className='input-icon-container'>
                  <FiMail size={16} className="input-icon" />
                  <input
                    type="email"
                    placeholder="seuEmail@gmail.com"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>

              <label className='login password'>
                <span>Senha</span>
                <div className="input-icon-container">
                  <FiLock size={16} className="input-icon" />
                  <input
                    type={visiblePassword ? "text" : "password"}
                    placeholder="******"
                    name="password"
                    className='input-password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" className="toggle-password" onClick={() => setVisiblePassword(!visiblePassword)}>
                    {visiblePassword ? <FaEyeSlash size={16} color='#73777a' /> : <FaEye size={16} color='#73777a' />}
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