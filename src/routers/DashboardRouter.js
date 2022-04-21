import { Navigate, Route, Routes } from "react-router-dom"

// Shared
import Navbar from "../shared/Navbar"
// Pages
import DcPage from "../pages/DcPage"
import MarvelPage from "../pages/MarvelPage"
import SearchPage from "../pages/SearchPage"
import HeroPage from "../pages/HeroPage"
// Prviders
import { HeroesProvider } from "../context/HeroesProvider"

const DashboardRouter = () => {
    return (
        <HeroesProvider>
            <div className="bg-gray-100 h-min-screen pb-20">
                <Navbar />
                <div className="max-w-7xl mx-auto">
                    <Routes>
                        <Route path="*" element={ <Navigate replace to="marvel" /> } />
                        <Route path="/" element={ <Navigate replace to="marvel" /> } />
                        <Route path="marvel" element={<MarvelPage />} />
                        <Route path="dc" element={<DcPage />} />
                        <Route path="hero/:idHeroe" element={<HeroPage />} />
                        <Route path="search" element={<SearchPage />} />
                    </Routes>
                </div>
            </div>

        </HeroesProvider>
    )
}

export default DashboardRouter