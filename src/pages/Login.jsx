import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('Password123!');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/', { replace: true });
    } catch {}
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 360, margin: '40px auto' }}>
      <h2>Login</h2>
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
      <div style={{ marginTop: 12 }}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 12 }}>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={{ width: '100%' }} />
      </div>
      <button disabled={loading} style={{ marginTop: 16, width: '100%' }}>
        {loading ? 'Signing in…' : 'Login'}
      </button>
      <div style={{ marginTop: 12 }}>
        No account? <Link to="/register">Register</Link>
      </div>
    </form>
  );
}
