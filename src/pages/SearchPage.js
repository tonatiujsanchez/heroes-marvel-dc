import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeroListItem from "../components/HeroListItem";
import { getHeroesByName } from "../helpers/getHeroesByName";
import useForm from "../hooks/useForm";

import queryString from 'query-string'


const SearchPage = () => {

    const navigate = useNavigate() // asignar queries
    const location = useLocation() // obtener queries

    const { q = '' } = queryString.parse(location.search)

    const [heroes, setHeroes] = useState([])
    const [{ searchText }, onChangeInput] = useForm({
        searchText: q
    })

    useEffect(()=>{
        const getHeroes = () =>{
            if( q === '' ) return
            const heroesResult = getHeroesByName(searchText.trim())
            setHeroes(heroesResult)
        }
        getHeroes()
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchText.trim() === '') {
            setHeroes([])
            navigate('')
            return
        }
        if( searchText === q ) return

        const heroesResult = getHeroesByName(searchText.trim())
        setHeroes(heroesResult)
        navigate(`?q=${ searchText.trim() }`)
    }

    return (
        <>
            <div className="bg-white h-72 rounded-lg flex flex-col justify-center items-center max-w-[95%] mx-auto animate__animated animate__fadeIn">
                <h1 className="mb-5 text-5xl font-bold">Buscar Héroes</h1>
                <form onSubmit={handleSubmit} className="w-[600px] max-w-[95%] flex flex-col md:flex-row md:border md:border-gray-300 rounded-lg">
                    <input
                        type="text"
                        name="searchText"
                        value={searchText}
                        onChange={onChangeInput}
                        className="px-3 py-2 border border-gray-300 md:border-0 rounded-md mb-2 md:mb-0 md:grow md:outline-none"
                        placeholder="Batman, Wonder Woman, Hulk, etc..." />
                    <button className="bg-emerald-500 py-2 px-5 rounded-lg text-white font-bold md:m-1">Buscar</button>
                </form>
            </div>

            <section>
                {
                    heroes.length > 0
                        ? <div className="mt-20 grid md:grid-cols-2 gap-4 lg:gap-8">
                            { heroes.map(hero => <HeroListItem key={ hero.id } hero={ hero } />) }
                            </div>
                        : (q.trim() === '')
                            ? <div className="flex justify-center mt-20">
                                <h3 className="text-3xl font-bold text-gray-300 animate__animated animate__fadeIn">Busca Héroes</h3>
                            </div>
                            : <div className="flex justify-center mt-20">
                                <h3 className="text-3xl font-bold text-gray-300 animate__animated animate__fadeIn">No se encontraron resultados</h3>
                            </div>
                }
            </section>

        </>
    )
}

export default SearchPage