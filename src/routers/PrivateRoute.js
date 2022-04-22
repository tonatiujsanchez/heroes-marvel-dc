import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"




const PrivateRoute = ({ children }) => {

    const { user } = useAuth()
    const { pathname, search } = useLocation()

    const pathameKey = `heroes_tailwind_pathname_${user.email}`
    if(user.logged){
        localStorage.setItem( pathameKey, pathname + search )
    }

    return (
        user.logged
            ? children
            : <Navigate replace to="/auth/login" />
    )
}

export default PrivateRoute