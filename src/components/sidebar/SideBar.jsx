import "./sideBar.css";
import { MdSecurity } from "react-icons/md"
import {
  FiAlertTriangle,
  FiFolder,
  FiBarChart2,
  FiCalendar,
  FiUsers,
  FiSettings
} from "react-icons/fi";
import SidebarItem from "../ui/sidebarItem/SideBarItem";

function Sidebar({colapsed}) {
  return (
    <aside className= {`sidebar ${colapsed ? "collapsed" : ""}`}>
        <header className="sidebar-header">
            <div className="icon-security"><MdSecurity/></div>
            <div className="header-texts">
                <h3>VulnTracker</h3>
                <p>Security Management</p>
            </div>
        </header>

      <nav className="sidebar-nav">
          <div className="nav-principal">
            <p className="title-principal">Principal</p>
            <ul className="list-principal">
              <SidebarItem icon={FiAlertTriangle} label="Vulnerabilidades"/>
              <SidebarItem icon={FiFolder} label="Projetos"/>
            </ul>
          </div>

          <div className="nav-principal">
            <p className="title-principal">Análise</p>
            <ul className="list-principal">
              <SidebarItem icon={FiBarChart2} label="Relatórios"/>
              <SidebarItem icon={FiCalendar} label="Calendário"/>
            </ul>
          </div>

          <div className="nav-principal">
            <p className="title-principal">Sistema</p>
            <ul className="list-principal">
              <SidebarItem icon={FiUsers} label="Usuários"/>
              <SidebarItem icon={FiSettings} label="Configurações"/>
            </ul>
          </div>
      </nav>
    </aside>
  );
}

export default Sidebar;