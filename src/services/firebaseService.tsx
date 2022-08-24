import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { User } from "../model/User";

export function CheckAuthentication(){
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user:any) => {
        setUser(user);
        if (initializing) setInitializing(false);
        
      }
    
    useEffect(() => {
        const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
  
      if (initializing) return null;  
}


export async function signinwithemailpassword(user:User) {
    try{
        const response = await signInWithEmailAndPassword(getAuth(), user.email, user.password);
        return await response;
    }catch(error:any){
        if(error && error.code && error.code === 'auth/user-not-found'){
            try{
                const response = await createUserWithEmailAndPassword(getAuth(), user.email, user.password);
                const currentUser = getAuth().currentUser;
                if(currentUser){
                    updateProfile(currentUser, {
                        displayName: user.name
                    });
                }
                return await response;
            }catch(error){
                return error;
            }
        }else{
            return error;
        }
    }
}

export async function createuserwithemailpassword(user:User) {
    try{
        const response = await createUserWithEmailAndPassword(getAuth(), user.email, user.password);
        const currentUser = getAuth().currentUser;
        if(currentUser){
            updateProfile(currentUser, {
                displayName: user.name
            });
        }
        return await response;
    }catch(error){
        return error;
    }
}

export async function passwordRest(email:string) {
    try{
        const response = await sendPasswordResetEmail(getAuth(), email);
        return await response;
    }catch(error){
        return error;
    }
}

export async function signout() {
    try{
        const response = await signOut(getAuth());
        return await response;
    }catch(error){
        return error;
    }
}
