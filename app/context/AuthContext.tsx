"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface User {
    [key: string]: any;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in on initial load
        const checkAuth = () => {
            const token = Cookies.get('adminToken');
            const userInfo = localStorage.getItem('adminInfo');

            if (token && userInfo) {
                try {
                    setUser(JSON.parse(userInfo));
                } catch (e) {
                    console.error("Error parsing user info", e);
                }
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = (userData: User, token: string) => {
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

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
