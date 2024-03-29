import React, {createContext, useState, useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const AuthContext = createContext()

const AuthProvider = (props)=>{
    const [user, setUser] = useState(null);
    const auth = getAuth();
    
    useEffect(()=>{
        const checkLogin = ()=>{
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    setUser(true)
                }
                else{
                    setUser(false);
                }
            
            })
        }
        checkLogin();
    }, [auth]);
    return <AuthContext.Provider value={{user}}>
    {props.children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider};
