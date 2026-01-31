import React from 'react'
import "./hero.css"
import { FiArrowRight } from "react-icons/fi";
import { FiShield, FiLock, FiEye, FiAlertCircle } from "react-icons/fi";

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className="hero-floating-icons">
                <FiShield className="floating-icon icon-1" />
                <FiLock className="floating-icon icon-2" />
                <FiEye className="floating-icon icon-3" />
                <FiAlertCircle className="floating-icon icon-4" />
            </div>
            <h1>Proteja sua infraestrutura com inteligência</h1>
            <p>Identifique, rastreie e corrija vulnerabilidades de segurança com uma plataforma moderna, intuitiva e eficiente.</p>
            <div className='hero-buttons'>
                <button className='btn-start-now'>
                    Começar agora
                    <FiArrowRight size={18} />
                </button>
                <button className='btn-resources'>Conhecer recursos</button>
            </div>
        </section>
    )
}

export default Hero