import "./header.css";
import { FiMenu } from "react-icons/fi";

function Header({onToggle}) {
  return (
    <header className="header">
      <button className="btn-hamburguer" onClick={onToggle}><FiMenu /></button>
      <span>User</span>
    </header>
  );
}

export default Header;
