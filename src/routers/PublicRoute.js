import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"




const PublicRoute = ({ children }) => {

    const { user } = useAuth()
    
    const pathameKey = `heroes_tailwind_pathname_${user.email}`
    const pathname = localStorage.getItem(pathameKey) || '/marvel'

    return (
        user.logged
            ? <Navigate replace to={pathname} />
            : children
    )
}

export default PublicRoute