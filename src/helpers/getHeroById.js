import { heroes } from "../data/heroes"


export const getHeroById = ( idHeroe ) => {
    
    console.log( 'getHeroById called...', 'idHeroe',idHeroe );
    return heroes.find( heroe => heroe.id === idHeroe )
}
