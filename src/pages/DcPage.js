import HeroComics from "../components/HeroComics"
import HeroList from "../components/HeroList"


const HeroComicsDesc = {
  title: 'DC Comics',
  subtitle: 'Los mejores Héroes del Universo',
  desc: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat.',
  img: 'https://i0.wp.com/collectible506.com/wp-content/uploads/2021/04/https___hypebeast.com_image_2021_03_dc-comics-nft-market-legal-affairs-company-letter-001.jpg',
  color: 'text-blue-600'
}

const DcPage = () => {


  return (
    <div className="max-w-[95%] mx-auto">
      <HeroComics { ...HeroComicsDesc } />
      <HeroList publisher={HeroComicsDesc.title} />
    </div>

  )
}

export default DcPage