// src/pages/Login.jsx
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const { login, loading, error } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/', { replace: true })
    } catch {
      // error surfaced via `error`
    }
  }

  return (
    <div className="centered-page">
      <form className="card form" onSubmit={onSubmit}>
        <h2 className="card__title">Login</h2>

        {error && <div className="form__error">{error}</div>}

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button className="btn btn--primary" type="submit" disabled={loading}>
          {loading ? 'Signing in…' : 'Log in'}
        </button>

        <hr className="hr" />

        <div>
          No account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  )
}
