import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "../sliders.css";


import { heroesSlider } from "../data/heroes-slider";



const AuthRoute = () => {

    return (
        <div className="grid md:grid-cols-12">
            <section className="hidden md:block md:col-span-7">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {
                        heroesSlider.map( hero => {
                            return(
                                <SwiperSlide key={hero.name} className="bg-gray-100">
                                    <div className="max-w-[600px]">
                                        <img className="w-full" src={ hero.url } alt={ hero.name } />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
            <section className="md:col-span-5 bg-slate-800">
                <Routes>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="*" element={<Navigate replace to="login" />} />
                </Routes>
            </section>
        </div>
    )
}

export default AuthRoute