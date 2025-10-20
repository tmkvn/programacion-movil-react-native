import { createContext, useContext, type PropsWithChildren } from "react"

interface AuthState {
  saludo: string
  token: string
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthContext.Provider value={{
      saludo: 'Hola Mundo',
      token: 'asfd'
    }} >
      {children}
    </AuthContext.Provider >
  )
}