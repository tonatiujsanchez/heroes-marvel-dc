import { Navigate, useNavigate, useParams } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

import { getHeroById } from "../helpers/getHeroById";



const HeroPage = () => {


    const navigate = useNavigate()
    const { idHeroe } = useParams()
    
    const heroe = getHeroById(idHeroe)

    if (!heroe) {
        console.log('heroeResult', heroe);
        return <Navigate to="/" />
    }


    const imgPath = `/assets/img/${heroe.id}.jpg`
    const characters = heroe.characters.split(',')

    const handleReturn = () =>{
        navigate(-1)
    }

    return (
        <div className="max-w-[95%] w-[940px] mx-auto grid md:grid-cols-2 gap-10 ">
            <div className="mx-auto md:ml-auto">
                <img className="rounded-lg shadow-lg animate__animated animate__fadeInLeftBig" src={imgPath} alt={heroe.superhero} />
            </div>
            <div>
                <h1 className="text-4xl font-bold">{heroe.superhero}</h1>
                <hr className="mb-10 mt-3" />
                <ul className="list-group">
                    <li className="mb-3 text-xl text-gray-800"> <b>Alter ego: </b>{heroe.alter_ego}</li>
                    <li className="mb-3 text-xl text-gray-800"> <b>Publisher: </b>{heroe.publisher}</li>
                    <li className="mb-3 text-xl text-gray-800"> <b>First Appearance: </b>{heroe.first_appearance}</li>
                </ul>
                <div className="my-10">
                    <h5 className="text-2xl font-bold text-gray-700">Characters</h5>
                    <ul className="mt-5 flex flex-wrap gap-3">
                        {characters.map(character => (
                            <li key={character} className="px-3 border border-emerald-500 bg-emerald-500 text-white rounded-lg">{character.trim()}</li>
                        ))
                        }
                    </ul>
                </div>

                <button
                    onClick={ handleReturn } 
                    className="px-5 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white border-2 border-red-600 rounded-md">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-2" />
                    Regresar
                </button>

            </div>
        </div>
    )
}

export default HeroPage