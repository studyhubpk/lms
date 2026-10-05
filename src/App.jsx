import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import CourseCard from './components/CourseCard'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import './styles.css'

const courses = [
  { id: 1, title: 'Introduction to Computer Science', teacher: 'Mr. Ahmed', lessons: 18, progress: 72, category: 'Computer Science' },
  { id: 2, title: 'Web Development Fundamentals', teacher: 'Ms. Sara', lessons: 24, progress: 45, category: 'Web Development' },
  { id: 3, title: 'English Communication', teacher: 'Mr. Hamza', lessons: 12, progress: 90, category: 'Languages' },
]

function App() {
  const [screen, setScreen] = useState('dashboard')
  const [role, setRole] = useState('student')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (screen === 'login') return <Login onLogin={(selectedRole) => { setRole(selectedRole); setScreen('dashboard') }} onRegister={() => setScreen('register')} />
  if (screen === 'register') return <Register onRegister={() => setScreen('login')} onLogin={() => setScreen('login')} />

  const go = (next) => {
    setScreen(next)
    setSidebarOpen(false)
  }

  return (
    <div className="app-shell">
      <Sidebar role={role} active={screen} open={sidebarOpen} onClose={() => setSidebarOpen(false)} onNavigate={go} onLogout={() => setScreen('login')} />
      <div className="main-area">
        <Topbar role={role} onMenu={() => setSidebarOpen(true)} />
        <main className="page-content">
          {screen === 'dashboard' && <Dashboard role={role} courses={courses} onCourses={() => go('courses')} />}
          {screen === 'courses' && <Courses courses={courses} />}
          {screen !== 'dashboard' && screen !== 'courses' && (
            <section className="placeholder-page card">
              <span className="eyebrow">Step 1</span>
              <h1>{screen.charAt(0).toUpperCase() + screen.slice(1)}</h1>
              <p>This module is ready for the next development step.</p>
              <button className="primary-btn" onClick={() => go('dashboard')}>Back to Dashboard</button>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
