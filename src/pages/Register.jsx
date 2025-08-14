// src/pages/Register.jsx
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const { register, loading, error } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(name, email, password)
      navigate('/', { replace: true })
    } catch {
      // error shown via `error` from hook
    }
  }

  return (
    <div className="centered-page">
      <form className="card form" onSubmit={onSubmit}>
        <h2 className="card__title">Create account</h2>

        {error && <div className="form__error">{error}</div>}

        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="reg-email">Email</label>
          <input
            id="reg-email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="reg-password">Password</label>
          <input
            id="reg-password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
            required
            minLength={8}
          />
          <div className="helper">Use 8+ characters with a mix of letters and numbers.</div>
        </div>

        <button className="btn btn--primary" type="submit" disabled={loading}>
          {loading ? 'Creating…' : 'Sign up'}
        </button>

        <hr className="hr" />

        <div>
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </form>
    </div>
  )
}
