import { useState } from 'react'

export default function Login({ onLogin, onRegister }) {
  const [role, setRole] = useState('student')

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand auth-brand"><div className="brand-mark">L</div><strong>My LMS</strong></div>
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Sign in</h1>
        <p className="muted">This is the Step 1 demo. Firebase authentication will be added next.</p>

        <label>Email<input type="email" placeholder="you@example.com" /></label>
        <label>Password<input type="password" placeholder="••••••••" /></label>
        <label>Demo role
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button className="primary-btn full" onClick={() => onLogin(role)}>Sign in</button>
        <p className="auth-switch">Don't have an account? <button onClick={onRegister}>Create one</button></p>
      </div>
    </div>
  )
}
