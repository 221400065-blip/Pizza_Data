import { createContext,useContext,useState,useEffect } from 'react';
const authContext = createContext()

export function useAuth() {
    return useContext(authContext)
}
export function AuthProvider({children}){
     const [userInfo, setuserInfo] = useState(()=> {
        const stored = localStorage.getItem('userInfo');
        return stored ? JSON.parse(stored) : [];
     });

     useEffect(() => {
        if(userInfo) {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }
        else {
            localStorage.removeItem('userInfo');
        }
     },[userInfo]);

     return (
        <authContext.Provider
          value={{
            userInfo,
            setuserInfo,
          }}
        >
          {children}
        </authContext.Provider>
      );
}
