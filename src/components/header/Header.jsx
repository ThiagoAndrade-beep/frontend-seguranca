import { useContext, useState } from "react";
import "./header.css";
import { FiSidebar } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

function Header({ onToggle }) {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <header className={`header`}>
      <button className="btn-hamburguer" onClick={onToggle}><FiSidebar size={18}/></button>

      <div className="testando-estilo">
        {theme === "light" && (
          <button className="icon-theme" onClick={() => setTheme("dark")}><FiSun size={16}/></button>
        )}
        {theme === "dark" && (
          <button className="icon-theme" onClick={() => setTheme("light")}><FiMoon size={16}/></button>
        )}
        <span>User</span>
      </div>
    </header>
  );
}

export default Header;
