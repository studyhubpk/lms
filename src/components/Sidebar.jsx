const studentItems = [
  ['dashboard', '⌂', 'Dashboard'],
  ['courses', '▣', 'My Courses'],
  ['assignments', '✓', 'Assignments'],
  ['quizzes', '?', 'Quizzes'],
  ['results', '◫', 'Results'],
  ['certificates', '◇', 'Certificates'],
]

const teacherItems = [
  ['dashboard', '⌂', 'Dashboard'],
  ['courses', '▣', 'My Courses'],
  ['students', '♙', 'Students'],
  ['assignments', '✓', 'Assignments'],
  ['quizzes', '?', 'Quizzes'],
]

const adminItems = [
  ['dashboard', '⌂', 'Dashboard'],
  ['courses', '▣', 'Courses'],
  ['students', '♙', 'Users'],
  ['reports', '◫', 'Reports'],
  ['settings', '⚙', 'Settings'],
]

export default function Sidebar({ role, active, open, onClose, onNavigate, onLogout }) {
  const items = role === 'teacher' ? teacherItems : role === 'admin' ? adminItems : studentItems

  return (
    <>
      {open && <div className="mobile-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark">L</div>
          <div>
            <strong>My LMS</strong>
            <span>Learning Platform</span>
          </div>
        </div>

        <div className="role-badge">{role.toUpperCase()}</div>

        <nav className="side-nav">
          {items.map(([id, icon, label]) => (
            <button key={id} className={active === id ? 'nav-item active' : 'nav-item'} onClick={() => onNavigate(id)}>
              <span>{icon}</span>{label}
            </button>
          ))}
        </nav>

        <button className="logout-btn" onClick={onLogout}>↪ Sign out</button>
      </aside>
    </>
  )
}
