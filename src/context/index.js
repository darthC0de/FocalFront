import React from 'react'
import { LoginContextProvider } from './LoginContext';

const GlobalContext = ({ children }) => {
  return <LoginContextProvider>{children}</LoginContextProvider>;
};

export default GlobalContext;