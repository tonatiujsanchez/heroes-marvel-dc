import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"




const PrivateRoute = ({ children }) => {

    const { user } = useAuth()
    const { pathname, search } = useLocation()

    localStorage.setItem( 'heroes_tailwind_pathname', pathname + search )
     
    return (
        user.logged
            ? children
            : <Navigate to="/login" />
    )
}

export default PrivateRoute