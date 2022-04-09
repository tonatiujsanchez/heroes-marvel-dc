import HeroComics from "../components/HeroComics"
import HeroList from "../components/HeroList"
import useHeroesPublisher from "../hooks/useHeroesPublisher"


const HeroComicsDesc = {
  title:'Marvel Comics',
  subtitle:'Los mejores Héroes del Universo',
  desc:'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat.',
  img:'https://lacovacha.mx/wp-content/uploads/2019/01/0-Marvel-0.jpg',
  color: 'text-red-600'
}


const MarvelPage = () => {
  
  return (
    <div className="max-w-[95%] mx-auto">
      <HeroComics {...HeroComicsDesc} />
      <HeroList publisher={HeroComicsDesc.title} />
    </div>
  )
}

export default MarvelPage