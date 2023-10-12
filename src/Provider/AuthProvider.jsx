import React, { createContext, useEffect, useState } from 'react';
import app from '../Firbase/Firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext=createContext(null)
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading, setLoading]=useState(true)

    const createUser= (email, password, name, photo)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, photo);
    }

    const provider = new GoogleAuthProvider();
    const GoogleSignin =()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const Login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unSub= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSub();
        }
    },[])

    const authInfo={
        user,createUser,logOut,Login,GoogleSignin,loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;