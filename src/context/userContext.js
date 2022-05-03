import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const userContext = createContext({
  user: null,
  setContext: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setContext] = useState(null);
  const value = { currentUser, setContext };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      createUserDocumentFromAuth(user);

      setContext(user);
    });
    return unsubscribe;
  }, []);
  return <userContext.Provider value={value}>{children} </userContext.Provider>;
};
