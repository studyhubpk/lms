export default function Topbar({ role, onMenu }) {
  return (
    <header className="topbar">
      <button className="menu-btn" onClick={onMenu}>☰</button>
      <div>
        <p className="topbar-title">Learning Management System</p>
        <p className="topbar-subtitle">Welcome back!</p>
      </div>
      <div className="topbar-actions">
        <button className="icon-btn" aria-label="Notifications">🔔</button>
        <div className="avatar">{role.charAt(0).toUpperCase()}</div>
      </div>
    </header>
  )
}
