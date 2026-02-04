import { useContext, useState } from "react";
import "./header.css";
import { FiSidebar } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import { FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";

function Header({ onToggle }) {
  const { theme, setTheme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const {user, loading} = useContext(AuthContext)

  function toggleMenu() {
    setMenuOpen(prev => !prev)
  }

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <header className={`header`}>
      <button className="btn-hamburguer" onClick={onToggle}><FiSidebar size={18} /></button>

      <div className="header-actions">
        {theme === "light" && (
          <button className="icon-theme" onClick={() => setTheme("dark")}><FiSun size={16} /></button>
        )}
        {theme === "dark" && (
          <button className="icon-theme" onClick={() => setTheme("light")}><FiMoon size={16} /></button>
        )}

        <button onClick={toggleMenu} className="icon-user">
          <FiUser size={18} />
        </button>

        {menuOpen && (
          <div className="menu-user">
            <div className="menu-user-info">
              <strong>{user.email}</strong>
              <span>Usuário</span>
            </div>
            <Link to="/LoginUser" className="menu-user-logout" onClick={handleLogout}>
              <FiLogOut size={16}/>
              <p>Sair</p>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
