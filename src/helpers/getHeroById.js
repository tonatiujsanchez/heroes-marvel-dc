import { heroes } from "../data/heroes"


export const getHeroById = ( idHeroe ) => {
    
    return heroes.find( heroe => heroe.id === idHeroe )
}
