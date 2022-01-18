import React from 'react';
interface AuthContext {
    userName: string,
    setUser:(user:string)=>void
  }
  
  const defaultState = {
    userName: '',
    setUser:()=>{}
  };
  
export const AuthContext = React.createContext<AuthContext>(defaultState);