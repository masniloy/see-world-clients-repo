import React from 'react';
import { createContext } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthPro = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);

    const creatUser = (name, email, password) => {
        setLoding(false);
        return createUserWithEmailAndPassword(auth, name, email, password)
    }

    const authInfo = {
        user,
        loading,
        creatUser,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoding(false);
        }));
        return () => {
            unsubscribe();
        }
    })

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthPro;