import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"




const PublicRoute = ({ children }) => {

    const { user } = useAuth()
    const pathname = localStorage.getItem('heroes_tailwind_pathname') || '/marvel'

    return (
        user.logged
            ? <Navigate replace to={pathname} />
            : children
    )
}

export default PublicRoute