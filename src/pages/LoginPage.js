import { useNavigate } from "react-router-dom"

const LoginPage = () => {


  const navigate = useNavigate()

  const handlesesion = () =>{

    navigate('/',{
      replace: true
    })
    

  }

  return (
    <div className="min-h-screen grid items-center justify-center">
      <button 
        onClick={ handlesesion }
        type="button" 
        className="border-blue-500 text-blue-500 font-semibold px-10 py-3 border-2 hover:bg-blue-500 hover:text-white rounded-md">
        LOGIN
      </button>
    </div>
  )
}

export default LoginPage