

import React, { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

  const [ user , setUser ] = useState(null)
  const [loading , setLoading] = useState(true)

  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const signIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth ,(loggedUser)=>{
      console.log('from obeserberAuth user is', loggedUser)
      setUser(loggedUser)
      setLoading(false)
    })
    return ()=> unsubscribe()
  },[])
  
  
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
  }


  return (
    <AuthContext.Provider value={authInfo} >
            {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>{
    return  useContext(AuthContext)
}
