import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"




const PublicRoute = ({ children }) => {

    const { user } = useAuth()

    return (
        user.logged
            ? <Navigate to="/marvel" />
            : children
    )
}

export default PublicRoute