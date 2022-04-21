import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"


const AuthRoute = () => {

  return (
    <div className="grid md:grid-cols-12">
        <section className="md:col-span-7">
            <h2>Hola mundo</h2>
        </section>
        <section className="md:col-span-5 bg-slate-800">
            <Routes>
                <Route path="login" element={ <LoginPage /> } />
                <Route path="register" element={ <RegisterPage /> }/>
                <Route path="*" element={ <Navigate replace to="login" /> } />
            </Routes>
        </section>
    </div>
  )
}

export default AuthRoute