import { Link } from "react-router-dom"
import useForm from "../hooks/useForm"


const RegisterPage = () => {

  const [ { name, email, password1, password2 }, onChangeInput ] = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const handleRegistro = ( e ) =>{
    e.preventDefault()

    console.log({
      name, 
      email,
      password1,
      password2
    });

  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={ handleRegistro }>
        <h1 className="text-white text-4xl font-semibold uppercase text-center mb-14">Crear cuenta</h1>
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 inline-block">Nombre:</label>
          <input 
            type="text" 
            name="name"
            value={name}
            onChange={onChangeInput} 
            className="w-full bg-gray-100 rounded-md px-3 py-3" 
            placeholder="Nombre" />
        </div>
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 inline-block">Correo Electrónico:</label>
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={onChangeInput} 
            className="w-full bg-gray-100 rounded-md px-3 py-3" 
            placeholder="ejemplo@mail.com" />
        </div>
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 inline-block">Contraseña:</label>
          <input 
            type="password" 
            name="password1"
            value={password1}
            onChange={onChangeInput} 
            className="w-full bg-gray-100 rounded-md px-3 py-3 placeholder:text-xl" 
            placeholder="********" />
        </div>
        <div className="mb-5">
          <label className="text-white font-semibold mb-2 inline-block">Confirma contraseña:</label>
          <input 
            type="password" 
            name="password2"
            value={password2}
            onChange={onChangeInput} 
            className="w-full bg-gray-100 rounded-md px-3 py-3 placeholder:text-xl" 
            placeholder="********" />
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