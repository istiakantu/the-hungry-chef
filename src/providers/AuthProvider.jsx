import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
 
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser =(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const loginUser = (email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const googleLogin= ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const gitLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth, gitProvider)
    }
    const logout = () =>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unSubscribe
        }
    },[])
    const authInfo ={
        user,
        createUser,
        loginUser,
        logout,
        googleLogin,
        gitLogin,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;