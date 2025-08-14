import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };
  return (
    <div style={{ maxWidth: 480, margin: '40px auto' }}>
      <h2>Home</h2>
      <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
      <button onClick={handleLogout} style={{ marginTop: 16 }}>Logout</button>
    </div>
  );
}
