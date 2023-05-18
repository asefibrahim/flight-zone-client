import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'



export const AuthContext = createContext(null)


const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }





    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;