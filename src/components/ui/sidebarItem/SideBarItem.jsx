import "./sideBarItem.css"

function SidebarItem({ icon: Icon, label, collapsed}) {
  return (
    <li className="sidebar-item" data-tooltip={collapsed ? label : ""}>
      <Icon size={17}/>
      <h3 className="sidebar-text">{label}</h3>
    </li>
  );
}

export default SidebarItem;
