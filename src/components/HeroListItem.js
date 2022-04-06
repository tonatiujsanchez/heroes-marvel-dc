import { Link } from "react-router-dom"




const HeroListItem = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance } = hero

    const imgPath = `/assets/img/${ id }.jpg`
    
    let bgHeaderMarvel = `before:bg-[url(https://oneroomwithaview.com/wp-content/uploads/2014/07/marvel-logo-wallpaper-1200x520.jpg)]`
    let bgHeaderDc = `before:bg-[url(https://pbs.twimg.com/media/EarWKBmWAAA2Voy.jpg)]`


    return (
        <div className="flex p-6 bg-white rounded-lg overflow-hidden">
            <div className={`flex-none w-48 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full ${ publisher === 'Marvel Comics' ? 'before:bg-red-500' : 'before:bg-blue-500' } before:rounded-md`}>
                <img src={ imgPath } alt={ superhero } className="absolute z-10 inset-0 w-full h-full object-cover object-top rounded-lg" />
            </div>
            <div className="flex-auto pl-6">
                <div className={`relative flex flex-wrap items-baseline pb-6 ${ publisher === 'Marvel Comics' ? bgHeaderMarvel : bgHeaderDc } before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6`}>
                    <h1 className="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                        { superhero }
                    </h1>
                    <div className={`relative text-lg text-white`}>
                        { alter_ego }
                    </div>
                </div>
                <div className="flex items-baseline my-5">
                    <div className="space-x-3 flex text-sm font-medium">
                        <p className="text-sm font-medium text-slate-500"> <span>Aparición:</span> { first_appearance }</p>
                    </div>
                </div>
                <div className="flex space-x-2 mb-4 text-sm font-medium">
                    <div className="flex space-x-4">
                        <Link 
                            to={`/hero/${id}`}
                            className={`px-6 h-10 uppercase font-semibold tracking-wider border ${ publisher === 'Marvel Comics' ? 'border-red-600 text-red-600 hover:bg-red-800' : 'border-blue-700 text-blue-700 hover:bg-blue-900 hover:border-blue-900' } hover:text-white transition flex gap-3 items-center rounded-md`} type="button">
                            Ver más
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroListItem