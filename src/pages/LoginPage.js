import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useForm from "../hooks/useForm"
import { types } from "../types/types"
import cogoToast from 'cogo-toast'

const keyStorageUsers = 'users_heroes_tailwind_1649855345628'

const LoginPage = () => {

    const { dispatch } = useAuth()
    const navigate = useNavigate()

    const [{ email, password }, onChangeInput] = useForm({
        email: '',
        password: ''
    })


    const handleSesion = (e) => {
        e.preventDefault()

        if ([email.trim(), password.trim()].includes('')) {
            showNotification('Por favor llene todos los campos')
            return
        }

        const expReg = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if (!expReg.test(email)) {
            showNotification('Por favor ingrese un correo válido')
            return
        }

        const existingUsers = JSON.parse(localStorage.getItem(keyStorageUsers)) || []
        const existUser = existingUsers.find(u => u.email === email)


        if (!existUser) {
            showNotification('Correo invalido')
            return
        }

        if (password !== existUser.password) {
            showNotification('Contraseña incorrecta')
            return
        }

        iniciarSesion(existUser)
    }



    const iniciarSesion = (user) => {
        dispatch({
            type: types.login,
            paylod: user
        })

        const lastPath = localStorage.getItem('heroes_tailwind_pathname') || '/marvel'
        navigate(lastPath, {
            replace: true
        })
    }


    const showNotification = ( message ) =>{

        const { hide } = cogoToast.error(
            '', 
            {   position: 'top-center', 
                heading: message, 
                onClick: () => {
                    hide()
                }
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSesion} className="mb-10">
                <h1 className="text-white text-4xl font-semibold uppercase text-center mb-12">Iniciar Sesión</h1>
                <div className="mb-5">
                    <label className="text-white font-semibold mb-2 inline-block text-xl">Correo Electrónico:</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={onChangeInput}
                        className="w-full bg-gray-100 rounded-md px-3 py-3 placeholder:text-xl"
                        placeholder="ejemplo@email.com" />
                </div>
                <div className="mb-5">
                    <label className="text-white font-semibold mb-2 inline-block text-xl">Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangeInput}
                        className="w-full bg-gray-100 rounded-md px-3 py-3 placeholder:text-xl"
                        placeholder="Contraseña" />
                </div>
                <button
                    type="submit"
                    className="border-blue-500 text-blue-400 font-semibold px-10 py-3 border-2 hover:bg-blue-500 hover:text-white rounded-md w-full mt-3 mb-3">
                    Iniciar sesión
                </button>
                <p className="text-gray-300 text-center">¿Aun no tienes una cuenta? <Link to="/auth/register" className="text-blue-400">Registrate</Link></p>
            </form>
        </div>
    )
}

export default LoginPage