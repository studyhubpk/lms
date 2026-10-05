export default function Register({ onRegister, onLogin }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="brand auth-brand"><div className="brand-mark">L</div><strong>My LMS</strong></div>
        <span className="eyebrow">GET STARTED</span>
        <h1>Create account</h1>
        <p className="muted">Account creation will be connected to Firebase in Step 2.</p>

        <label>Full name<input type="text" placeholder="Your name" /></label>
        <label>Email<input type="email" placeholder="you@example.com" /></label>
        <label>Password<input type="password" placeholder="Create a password" /></label>
        <label>Account type
          <select defaultValue="student">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>

        <button className="primary-btn full" onClick={onRegister}>Create account</button>
        <p className="auth-switch">Already have an account? <button onClick={onLogin}>Sign in</button></p>
      </div>
    </div>
  )
}
