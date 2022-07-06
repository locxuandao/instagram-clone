import { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase/config';

export const AuthContext = createContext()

function AuthProvider({children}) {
  const [user,setUser] = useState({})
  const navagatie = useNavigate()
  
  
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
           if(user) { 
            const {displayName,email,uid,photoURL} = user
            setUser({displayName,email,uid,photoURL})
            navagatie('/app')
           }
       })
        //clean function
          return () => {
              unsubscribe()
            }
  },[navagatie])
  
    return (
       <AuthContext.Provider value={{user}}>
           {children}
       </AuthContext.Provider>
    );
}

export default AuthProvider;