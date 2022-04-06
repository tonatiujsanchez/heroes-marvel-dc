import { heroes } from "../data/heroes"


export const getHeroByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics','Marvel Comics']

    if( !validPublishers.includes(publisher) ){
        throw new Error(`${ publisher } no es un publisher válido`)
    }

    console.log( publisher )
    return heroes.filter( heroe => heroe.publisher === publisher )
}

