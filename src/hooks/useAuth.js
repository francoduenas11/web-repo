import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';

export function useAuth() {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const saveSession = useCallback((t, u) => {
    setToken(t);
    setUser(u);
    localStorage.setItem('token', t);
    localStorage.setItem('user', JSON.stringify(u));
  }, []);

  const clearSession = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }, []);

  const login = async (email, password) => {
    setLoading(true); setError('');
    try {
      const { token: t, user: u } = await api('/auth/login', { method: 'POST', body: { email, password } });
      saveSession(t, u);
      return u;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true); setError('');
    try {
      const { token: t, user: u } = await api('/auth/register', { method: 'POST', body: { name, email, password } });
      saveSession(t, u);
      return u;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  const refreshMe = async () => {
    if (!token) return;
    try {
      const { user: u } = await api('/auth/me', { token });
      saveSession(token, u);
    } catch {
      clearSession();
    }
  };

  useEffect(() => { refreshMe(); /* on mount */ }, []); // eslint-disable-line

  return { token, user, loading, error, login, register, logout: clearSession };
}
