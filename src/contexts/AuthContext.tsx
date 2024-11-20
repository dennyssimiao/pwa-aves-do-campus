import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "utils/firebase";
import { onAuthStateChanged, signInWithPopup, signOut, User, UserCredential } from "firebase/auth";

interface AuthContextData {
    user: User | null;
    isAdmin: boolean | null;
    isLoading: boolean;
    loginWithGoogle: (isAdmin: boolean) => Promise<UserCredential | null>;
    logout: () => Promise<void>;
}

interface AuthProviderProps {
    children?: ReactNode;
}

const AuthContext = createContext<AuthContextData>({
    user: null,
    isAdmin: null,
    isLoading: true,
    loginWithGoogle: async () => null,
    logout: async () => { },
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const [isLoading, seIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                const savedIsAdmin = localStorage.getItem("isAdmin");
                if (savedIsAdmin !== null) {
                    setIsAdmin(JSON.parse(savedIsAdmin));
                }
            } else {
                setUser(null);
                setIsAdmin(null);
            }
            seIsLoading(false);
        });
        return unsubscribe;
    }, []);

    const loginWithGoogle = async (isAdmin: boolean) => {
        try {
            const newUser = await signInWithPopup(auth, googleProvider);
            setIsAdmin(isAdmin);
            localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
            return newUser;
        } catch (error) {
            console.error("Login failed", error);
        }

        return null;
    };

    const logout = async () => {
        try {
            setIsAdmin(null);
            localStorage.removeItem("isAdmin");
            await signOut(auth);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return <AuthContext.Provider value={{ user, isAdmin, isLoading, loginWithGoogle, logout }}>
        {children}
    </AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
