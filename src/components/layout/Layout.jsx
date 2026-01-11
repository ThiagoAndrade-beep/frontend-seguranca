import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/SideBar";
import "./layout.css";

function Layout({ children }) {
  const [isSidebarColapsed, setIsSidebarColapsed] = useState(false)

  function toggleSidebar() {
    setIsSidebarColapsed(prev => !prev)
  }

  return (
    <div className="layout">
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
