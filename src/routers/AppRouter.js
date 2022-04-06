import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import DashboardRouter from "./DashboardRouter"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <LoginPage /> }  />
                <Route path="/*" element={ <DashboardRouter/> } />
            </Routes>

        </BrowserRouter>


    )
}

export default AppRouter