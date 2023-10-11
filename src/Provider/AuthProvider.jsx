import React, { createContext, useEffect, useState } from 'react';
import app from '../Firbase/Firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext=createContext(null)
const auth= getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser= (email, password, name, photo)=>{
        return createUserWithEmailAndPassword(auth, email, password, name, photo);
    }

    const provider = new GoogleAuthProvider();
    const GoogleSignin =()=>{
        return signInWithPopup(auth, provider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const Login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
       const unSub= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unSub();
        }
    },[])

    const authInfo={
        user,createUser,logOut,Login,GoogleSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;