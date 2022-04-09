import { useContext } from "react"
import HeroesContext from "../context/HeroesProvider"



const useHeroesPublisher = () => {
  
    return useContext( HeroesContext )
}

export default useHeroesPublisher