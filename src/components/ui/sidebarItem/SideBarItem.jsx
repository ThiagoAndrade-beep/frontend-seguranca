import "./sideBar.css"

function SidebarItem({ icon: Icon, label }) {
  return (
    <li className="sidebar-item">
      <Icon size={17}/>
      <h3 className="sidebar-text">{label}</h3>
    </li>
  );
}

export default SidebarItem;
