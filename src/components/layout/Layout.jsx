import { useContext, useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/SideBar";
import "./layout.css";
import { ThemeContext } from "../../context/ThemeContext";

function Layout({ children }) {
  const [isSidebarColapsed, setIsSidebarColapsed] = useState(false)
  const {theme} = useContext(ThemeContext)

  function toggleSidebar() {
    setIsSidebarColapsed(prev => !prev)
  }

  return (
    <div className={`layout ${theme}`}>
        <Sidebar colapsed={isSidebarColapsed}/>
      
      <div className="layout-main">
        <Header onToggle={toggleSidebar}/>
        <main className="layout-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
