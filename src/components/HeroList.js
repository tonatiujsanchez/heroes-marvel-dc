import { useEffect } from "react";
import useHeroesPublisher from "../hooks/useHeroesPublisher";
import HeroListItem from "./HeroListItem";




const HeroList = ({ publisher }) => {
    
    const { heroes, getHeroesByPublisherProvider } = useHeroesPublisher()
    
    useEffect(()=>{
        getHeroesByPublisherProvider( publisher )
    },[])


    return (
        <div className="mt-20 grid md:grid-cols-2 gap-4 lg:gap-8">
            { 
                heroes[publisher]?.length
                && heroes[publisher].map( hero => <HeroListItem key={ hero.superhero } hero={ hero } /> )
            }
        </div>
    )
}

export default HeroList