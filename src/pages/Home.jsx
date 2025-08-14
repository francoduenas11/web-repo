// src/pages/Home.jsx
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <header className="topbar">
        <div className="topbar__brand">MyApp</div>
        <div className="topbar__actions">
          <span>Hi{user?.name ? `, ${user.name}` : ''}</span>
          <button className="btn btn--link" onClick={handleLogout}>Log out</button>
        </div>
      </header>

      <div className="centered-page">
        <div className="card">
          <h2 className="card__title">Welcome</h2>
          <p>You’re signed in. This is your home area.</p>

          <div style={{ marginTop: 12 }}>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
        </div>
      </div>
    </>
  )
}
