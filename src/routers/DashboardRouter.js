import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import DcPage from "../pages/DcPage"
import HeroPage from "../pages/HeroPage"
import MarvelPage from "../pages/MarvelPage"
import SearchPage from "../pages/SearchPage"


const DashboardRouter = () => {
  return (
    <div className="bg-gray-100 h-min-screen pb-20">
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <Routes>
              <Route path="/" element={ <MarvelPage /> } />
              <Route path="marvel" element={ <MarvelPage /> } />
              <Route path="dc" element={ <DcPage /> } />
              <Route path="hero/:idHeroe" element={ <HeroPage /> } />
              <Route path="search" element={ <SearchPage /> } />
          </Routes>
        </div>
    </div>
  )
}

export default DashboardRouter