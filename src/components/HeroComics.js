

const HeroComics = ({ title, subtitle, desc, img, color }) => {
    return (
        <div className="w-full md:h-[450px] rounded-lg flex flex-col md:flex-row overflow-hidden">
            <div className="relative z-10 bg-white p-10 w-full md:w-3/6 h-[350px] md:h-auto">
                <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-20 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <div className="p-3 h-full flex flex-col justify-center">
                    <h1 className={`${ color } text-6xl font-extrabold mb-1`} >{ title }</h1>
                    <h2 className="text-3xl text-gray-700 font-bold">{ subtitle }</h2>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{ desc }</p>
                </div>
            </div>
            <div className="w-full md:w-3/6 h-[350px] md:h-auto">
                <img className="h-full w-full object-cover" src={ img } alt={ title } />
            </div>
        </div>
    )
}

export default HeroComics