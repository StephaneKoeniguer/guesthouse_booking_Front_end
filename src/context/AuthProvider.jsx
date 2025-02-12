import React, {createContext, useState, useContext, useEffect} from 'react';

// Créez un contexte pour l'authentification
const AuthContext = createContext(null);

// Provider pour l'authentification
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    // Vérification token pour problème refresh
    useEffect(() => {
        // Vérifie si un token est stocké dans localStorage au démarrage
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);



    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData); // Stocker l'utilisateur ou les données nécessaires
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('authToken'); // Supprimer le token lors de la déconnexion
    };


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook pour utiliser le contexte Auth
export const useAuth = () => useContext(AuthContext);