import React from "react";
import "./footer.css";
import { FiShield } from "react-icons/fi";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo">
            <div><FiShield color="#fff" size={18}/></div>
            <strong>VulnTracker</strong>
          </div>
          <p>
            Plataforma líder em gestão de vulnerabilidades para empresas
            modernas.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Produto</h4>
            <ul>
              <li>Recursos</li>
              <li>Preços</li>
              <li>FAQ</li>
              <li>Integrações</li>
            </ul>
          </div>

          <div>
            <h4>Empresa</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Blog</li>
              <li>Carreiras</li>
              <li>Contato</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacidade</li>
              <li>Termos de uso</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VulnTracker. Todos os direitos reservados.</span>

        <div className="footer-social">
          <FaTwitter />
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
