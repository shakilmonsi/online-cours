import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const loginwithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const loginwithGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const updateProfileUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            if (currentUser === null || currentUser.uid) {
                setUser(currentUser)

            }
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }

    }, [])
    const authinfo = {
        user,
        createUser,
        signIn,
        logOut,
        loginwithGoogle,
        loginwithGithub,
        updateProfileUser,
        loading
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;