import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import DashboardRouter from "./DashboardRouter"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path='/login' element={ <LoginPage /> }  /> */}
                <Route path='/login' element={ 
                    <PublicRoute>
                        <LoginPage /> 
                    </PublicRoute>
                }/>

                <Route path="/*" element={ 
                    <PrivateRoute>
                        <DashboardRouter/> 
                    </PrivateRoute>
                } />
                {/* <Route path="/*" element={ <DashboardRouter/> } /> */}
            </Routes>
        </BrowserRouter>


    )
}

export default AppRouter