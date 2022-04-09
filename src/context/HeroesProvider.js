import { createContext, useState } from "react"
import { getHeroByPublisher } from "../helpers/getHeroByPublisher"

const HeroesContext = createContext()


const HeroesProvider = ({ children }) => {

    const [heroes, setHeroes] = useState({
        // "DC Comics": [],
        // "Marvel Comics": []
    })

    const getHeroesByPublisherProvider = (publisher) => {
        
        if ( !(Object.keys(heroes).includes(publisher)) ) {
            
            const heroesResp =  getHeroByPublisher( publisher )
            setHeroes({
                ...heroes,
                [publisher]: heroesResp
            })
        }
    }

    return (
        <HeroesContext.Provider value={{
            heroes,
            getHeroesByPublisherProvider
        }} >
            {children}
        </HeroesContext.Provider>
    )
}

export {
    HeroesProvider
}

export default HeroesContext