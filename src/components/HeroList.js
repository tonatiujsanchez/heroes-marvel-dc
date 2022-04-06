import { useEffect, useState } from "react";
import { getHeroByPublisher } from "../helpers/getHeroByPublisher"
import HeroListItem from "./HeroListItem";





const HeroList = ({ publisher }) => {

    const [ heroes, setHeroes ] = useState([])

    useEffect(()=>{
        const heroesResp = getHeroByPublisher(publisher)
        setHeroes( heroesResp )
    },[])


    return (
        <div className="mt-20 grid md:grid-cols-2 gap-4 lg:gap-8">
            { 
                heroes.map( hero => <HeroListItem key={ hero.superhero } hero={ hero } /> )
            }
        </div>
    )
}

export default HeroList