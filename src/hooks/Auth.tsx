import React, { useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { User } from "../model/User";

interface Auth {
    loggedIn: Boolean;
    status?: string;
    role?: string;
    userId?: string;
    userData?:any;
    user?:User | undefined;
}
interface AuthInit {
  loading: boolean;
  auth?: Auth;
}

export const AuthContext = React.createContext<Auth>({ loggedIn: false });

export function useAuth(): Auth {
  return useContext(AuthContext);
}

export function UseAuthInit(): AuthInit {
  const [authInit, setAuthInit] = useState<AuthInit>({ loading: true });
  useEffect(() => {
    const auth = getAuth();
    const res = onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser){
        let user: User = {
            name: firebaseUser.displayName ? firebaseUser.displayName : '',
            email: firebaseUser.email ? firebaseUser.email : '',
            role: firebaseUser.email && firebaseUser.email === 'aroraakashduper@gmail.com' ? 'admin' : 'user',
            password: ''
        }
        console.log(user);
        const auth = firebaseUser
                  ? { loggedIn: true, userId: firebaseUser.uid, userData: firebaseUser, user: user }
                  : { loggedIn: false };
                setAuthInit({ loading: false, auth });
      }else{
        const auth = { loggedIn: false, status: 'inactive' };
                setAuthInit({ loading: false, auth });
      }
    });
    return res;
  }, []);
  return authInit;
}