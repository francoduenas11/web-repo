import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const { register, loading, error } = useAuth();
  const [name, setName] = useState('Test User');
  const [email, setEmail] = useState('test2@example.com');
  const [password, setPassword] = useState('Password123!');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/', { replace: true });
    } catch {}
  };

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: 360, margin: '40px auto' }}>
      <h2>Register</h2>
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
      <div style={{ marginTop: 12 }}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 12 }}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 12 }}>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={{ width: '100%' }} />
      </div>
      <button disabled={loading} style={{ marginTop: 16, width: '100%' }}>
        {loading ? 'Creating…' : 'Create account'}
      </button>
      <div style={{ marginTop: 12 }}>
        Have an account? <Link to="/login">Login</Link>
      </div>
    </form>
  );
}
