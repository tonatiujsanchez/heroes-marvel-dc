import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { types } from "../types/types"

const LoginPage = () => {

  const { dispatch } = useAuth()
  const navigate = useNavigate()
  

  const handleSesion = () =>{

    dispatch({
      type: types.login,
      paylod: {
        name: 'B. Santiago SH'
      }
    })

    const lastPath = localStorage.getItem('heroes_tailwind_pathname') || '/marvel'
    navigate( lastPath, {
      replace: true
    })

  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={ handleSesion } className="mb-10">
        <h1 className="text-white text-4xl font-semibold uppercase text-center mb-12">Iniciar Sesión</h1>
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 inline-block">Correo Electrónico:</label>
          <input type="text" name="email" className="w-full bg-gray-100 rounded-md px-3 py-3" placeholder="ejemplo@email.com" />
        </div>
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 inline-block">Contraseña:</label>
          <input type="text" name="email" className="w-full bg-gray-100 rounded-md px-3 py-3 placeholder:text-xl" placeholder="********"/>
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