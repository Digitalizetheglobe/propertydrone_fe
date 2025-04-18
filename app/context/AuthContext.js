"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in on initial load
    const checkAuth = () => {
      const token = Cookies.get('adminToken');
      const userInfo = localStorage.getItem('adminInfo');
      
      if (token && userInfo) {
        setUser(JSON.parse(userInfo));
      }
      
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (userData, token) => {
    Cookies.set('adminToken', token, { expires: 7 });
    localStorage.setItem('adminInfo', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('adminToken');
    localStorage.removeItem('adminInfo');
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);