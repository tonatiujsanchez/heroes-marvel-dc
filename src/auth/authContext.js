import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";

const AuthContext = createContext()


const keyStorage = 'heroes_tailwind_1649855345628'

const init = () =>{
    return JSON.parse( localStorage.getItem( keyStorage ) ) || { logged: false }
}


const AuthProvider = ({ children }) =>{

    const [ user, dispatch ] = useReducer( authReducer, {}, init )

    useEffect(()=>{
        if( !user ) return
        localStorage.setItem( keyStorage, JSON.stringify( user ) )
    },[ user ])


    return(
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}
export default AuthContext