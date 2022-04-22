import { NavLink, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { types } from "../types/types"


const Navbar = () => {

    const { user, dispatch } = useAuth()
    const navigate = useNavigate()

    const handleSesion = () =>{

        dispatch({ type: types.logout })

        navigate('/auth/login',{
            replace: true
        })
    }

    return (
        <header className="max-w-7xl mx-auto mb-5">
            <nav className="py-7 flex justify-between max-w-[95%] mx-auto">
                <div className="flex items-center gap-5">
                    <NavLink to="/" 
                        className="uppercase font-bold text-gray-900 mr-2 text-xl"> ⚡ </NavLink>
                    <NavLink to="/marvel"
                        className={ ({ isActive })=>`${isActive ? 'text-gray-900': 'text-gray-500'} uppercase font-semibold hover:text-gray-700` }>Marvel</NavLink>
                    <NavLink to="/dc" 
                        className={ ({ isActive })=>`${isActive ? 'text-gray-900': 'text-gray-500'} uppercase font-semibold hover:text-gray-700` }>DC</NavLink>
                    <NavLink to="/search" 
                        className={ ({ isActive })=>`${isActive ? 'text-gray-900': 'text-gray-500'} uppercase font-semibold hover:text-gray-700` }>Buscar</NavLink>
                </div>
                <div className="flex items-center gap-5">
                    <p className="text-gray-700 uppercase font-semibold">{ user.name }</p>
                    <button onClick={ handleSesion }
                        className="uppercase font-semibold bg-red-600 border-2 border-red-600 hover:bg-gray-100 hover:text-red-600 text-white px-5 py-1 rounded-lg">Logout</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar