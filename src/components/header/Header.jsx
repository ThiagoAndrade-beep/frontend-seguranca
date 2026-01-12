import "./header.css";
import { FiSidebar } from "react-icons/fi";



function Header({onToggle}) {
  return (
    <header className="header">
      <button className="btn-hamburguer" onClick={onToggle}><FiSidebar size={20} color="#1d1b1b"/></button>
      <span>User</span>
    </header>
  );
}

export default Header;
