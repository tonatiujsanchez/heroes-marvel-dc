import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useForm from "../hooks/useForm"
import { types } from "../types/types"
import cogoToast from 'cogo-toast'

const keyStorageUsers = 'users_heroes_tailwind_1649855345628'

const RegisterPage = () => {

    const { dispatch } = useAuth()
    const navigate =  useNavigate()
    const [{ name, email, password, password2 }, onChangeInput] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleRegistro = (e) => {
        e.preventDefault()

        if ([name.trim(), email.trim(), password.trim(), password2.trim()].includes('')) {
            showNotification('Todos los campos son obligatorios');
            return
        }

        const expReg = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
        if(!expReg.test(email.trim())){
            showNotification('Por favor ingrese un correo válido' )
            return
        }

        if(password !== password2){
            showNotification('Las contraseñas no son iguales')
            return
        }

        if(password.length < 6){
            showNotification('La contraseña es muy corta, se requieren al menos 6 caracteres')
            return
        }
        
        crearCuenta({
            id: Date.now(),
            name,
            email,
            password
        })

    }


    const crearCuenta = ( newUser ) =>{
        const existingUsers = JSON.parse( localStorage.getItem(keyStorageUsers) ) || []


        const exist = existingUsers.some( u => u.email === newUser.email )

        if( exist ){
            showNotification(`Ya existe una cuenta registada con el correo <<${newUser.email}>>`)
        }else{
            const newUsers = [ ...existingUsers, newUser ]
            localStorage.setItem( keyStorageUsers, JSON.stringify(newUsers) )

            dispatch({
                type: types.login,
                paylod: newUser
            })

            const lastPath = localStorage.getItem('heroes_tailwind_pathname') || '/marvel'
            navigate( lastPath, {
              replace: true
            })
        }
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
            <form onSubmit={handleRegistro} className="mx-3">
                <h1 className="text-white text-4xl font-semibold uppercase text-center mb-12">Crear cuenta</h1>
                <div className="mb-5">
                    <label className="text-white font-semibold mb-2 inline-block text-xl">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChangeInput}
                        className="w-full bg-gray-100 rounded-md px-3 py-3 text-xl"
                        placeholder="Nombre" />
                </div>
                <div className="mb-5">
                    <label className="text-white font-semibold mb-2 inline-block text-xl">Correo Electrónico:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChangeInput}
                        className="w-full bg-gray-100 rounded-md px-3 py-3 text-xl"
                        placeholder="ejemplo@mail.com" />
                </div>
                <div className="mb-5">
                    <label className="text-white font-semibold mb-2 inline-block text-xl">Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangeInput}
                        className="w-full bg-gray-100 rounded-md px-3 py-3 placeholder:text-xl"
                        placeholder="contraseña" />
                </div>
                <div className="mb-5">
                    <label className="text-white font-semibold mb-2 inline-block text-xl">Confirma contraseña:</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChangeInput}
                        className="w-full bg-gray-100 rounded-md px-3 py-3 placeholder:text-xl"
                        placeholder="Repite contraseña" />
                </div>
                <button
                    type="submit"
                    className="border-blue-500 text-blue-400 font-semibold px-10 py-3 border-2 hover:bg-blue-500 hover:text-white rounded-md w-full mt-5 mb-10">
                    Crear Cuenta
                </button>
                <p className="text-gray-300 text-center">¿Ya tienes una cuenta? <Link to="/auth/login" className="text-blue-400">Inicia Sesión</Link></p>

            </form>
        </div>
    )
}

export default RegisterPage